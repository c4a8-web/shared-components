# shared-components

Storybook driven shared web components powered by [Storybook](https://storybook.js.org/).

https://c4a8-web.github.io/shared-components/

# Installation

## Prerequisites

To start and install storybook you need node with the version provided in the .nvmrc file and the package manager yarn or the default package manager npm.
Node can be found at [nodejs.org](https://nodejs.org/en/).

## Install

To install the packages use yarn package manager or npm. For this documentation we will use yarn.
If you don't have yarn installed you can install it with:

```
npm install --global yarn
```

After that yarn should be working. Sometimes you need to restart your terminal or your editor for it to work.
If it works you can continue with:

```
yarn install
```

# Starting

To start storybook just run the command

```
yarn storybook
```

or the npm version of that if you are using npm.

# Integration

If you want to use the `shared-components` in your project you need to go through these Integration steps.

## Jekyll

In your Jekyll configuration the `_config.yml` you need to add the path to the `shared-components` folder like this:

```
shared_components_path: _includes/shared-components
```

You also need to add this part:

```
git:
  - repo: https://github.com/c4a8-web/shared-components
    branch: master
    skip_if_exists: _local.shared-components.yml
```

And you need to add the \_temp/ folder to your exclude list

You also need a Generator called `sharedcomponents.rb` in your \_plugins folder that looks like this:

```
require 'fileutils'
require 'git'

class SharedComponentsNotFoundException < StandardError; end

def redText(text)
  "\e[31m#{text}\e[0m"
end

class SharedComponentsGenerator
  def generate(site)
    asset_path = site.config['shared_components_path'] + '/assets/**/*.{js,png,svg,gif,map,css,woff,woff2,ttf,eot}'
    temp_path = "_temp/"
    base_partials_path = site.config['shared_components_path'] + '/includes/**/*.{html}'
    partials_path = temp_path + site.config['shared_components_path'] + '/includes/**/*.{template}'
    puts "Generate Shared Components as Static Files in " + asset_path

    i=0
    curr_file = nil

    Dir.glob(asset_path, File::FNM_DOTMATCH) do |f|
      file = File.stat(f)
      next unless file.file?
      i += 1
      curr_file = [f, file]
      if curr_file != nil then
        filePath = curr_file[0]
        site.static_files << Jekyll::StaticFile.new(site, site.source, File.dirname(filePath), File.basename(filePath))
      end
    end

    Dir.glob(base_partials_path, File::FNM_DOTMATCH) do |f|
      file = File.stat(f)
      next unless file.file?
      curr_file = [f, file]
      if curr_file != nil then
        filePath = curr_file[0]
        full_path = temp_path + File.dirname(filePath)
        destination_path = full_path + "/" + File.basename(filePath).sub('.html', '.template')

        unless File.directory?(full_path)
          FileUtils.mkdir_p(full_path)
        end

        FileUtils.cp(filePath, destination_path)
      end
    end

    Dir.glob(partials_path, File::FNM_DOTMATCH) do |f|
      file = File.stat(f)
      next unless file.file?
      i += 1
      curr_file = [f, file]
      if curr_file != nil then
        filePath = curr_file[0]
        source_path = site.source + '/' + temp_path
        dirname = File.dirname(filePath).sub(temp_path, '')

        staticFile = Jekyll::StaticFile.new(site, source_path, dirname, File.basename(filePath))
        site.static_files << staticFile
      end
    end

    puts "Total files: #{i}"
  end
end

module Jekyll
  class GitDownloader < Generator
    def generate(site)
      config = site.config['git']
      return unless config

      puts "Checks for Shared Components"

      config.each do |entry|
        dest = File.join(site.source, site.config['shared_components_path'])
        skip_if_exists = entry['skip_if_exists']

        next if File.exist?(File.join(site.source, skip_if_exists))

        puts "Tries to download Shared Components from git"

        repo = entry['repo']
        branch = entry['branch'] || 'master'

        FileUtils.rm_rf(dest) if File.exist?(dest)
        Git.clone(repo, dest, branch: branch)
      end

      folder_path = site.config['shared_components_path']

      if File.directory?(folder_path)
        puts "Starting Generator of Shared Components"

        SharedComponentsGenerator.new.generate(site)
      else
        message = "You need to check out a Version of the Shared Components in this folder: '#{folder_path}'"

        puts redText(message)

        raise SharedComponentsNotFoundException, message
      end
    end
  end
end

```

This Generator will download the latest version from git and copy the JavaScript and the other assets to the static Folders in Jekyll.

## SCSS

To include the Styles of the `shared-components` you need to add this to your site.scss after the charset pretty much at the top:

```
@function static-assets($url) {
  $basePath: '/_includes/shared-components/assets/';
  $assetPath: $basePath + str-slice($url, 4);

  @return url(#{$assetPath});
}

$shared-components: false;
$font-familys: (
  "lato": false,
  "miriam": true,
);


@import "../../_includes/shared-components/assets/scss/index";
```

This will load the basic styles. And you can specifiy which font-family you want to load. At the end of that site.scss you need to load the colors of the site you want. For `Radiusaas` it would be:

```
@import "../../_includes/shared-components/assets/scss/themes/radiusaas";
```

In your \_user-variables.scss you need to add the scss variable for the site:

```
$site: "radiusaas";
```

For all layouts in the `_layouts` folder, you need to change the body class from

```
class="site"
```

to the site and the `shared-components` so for `Radiusaas` it would be:

```
class="shared-components radiusaas"
```

This should be everything you need to use the `shared-components` Styles. If you want to load an image through scss use the function `assets()` this will make sure the paths are correct.

## JavaScript

To add the JavaScript to your site you need to import the Main JavaScript into your app.js like this:

```
import { State } from '/_includes/shared-components/assets/js/index.js';
```

If you don't need the State in your Code you can import it without it. Everything else is handled by the JavaScript itself.
You also need to update the type of your `app.js` Script in the `scripts.html` file and add the partialsPath like this:

```
<script>
  window.partialsPath = '/_includes/shared-components/includes/';
</script>
<script
  type="module"
  charset="UTF-8"
  src="{{ site.baseurl }}/assets/js/app.js"
  id="appjs"
></script>
```

Replace the type `text/javascript` with `module`

## Storybook

You also need to create a color theme file for your new site in `scss/themes` you can copy the `_theme-template.scss`as a start and change that to your needs.
After that you need to add that theme to the Theme Switcher Addon of Storybook. Go to `.storybook/themes/src` add your theme in `defaults.js` and in `.storybook/themeImports.js` add
the path to the themes scss.

## CloudCannon

In order for cloud cannon to work with this submodule which they can't out of the box we need a preinstall hook to clone the repo.
For that go to the `.cloudcannon` folder and create a file `preinstall` with this content:

```
#!/bin/bash

cd ./_includes
rm -Rf shared-components

git clone --branch 0.0.1 https://github.com/c4a8-web/shared-components.git

```

The 0.0.1 stands for the latest tag that was released so the number might be different now.
