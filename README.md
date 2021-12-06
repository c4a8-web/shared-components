# shared-components

Storybook driven shared web components powered by [Storybook](https://storybook.js.org/).

# Installation

## Prerequisites

To start and install storybook you need node with the version provided in the .nvmrc file and the package manager yarn or the default package manager npm

## Install

To install the packages use yarn package manager or npm.

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

## Git

You need to add this project as a git submodule to the project you want to use the `shared-components`. Add a .gitmodules File or add them via GUI.

```
[submodule "_includes/shared-components"]
	path = _includes/shared-components
	url = https://github.com/c4a8-web/shared-components.git
```

If your Git Client doesn't initialize the submodule automatically or you use a terminal for git commands you need to run

```
git submodule init "_includes/shared-components"
```

and

```
git submodule update "_includes/shared-components"
```

to update and checkout the submodule.

You also need to update your .gitignore file with this part

```
_temp
```

## Jekyll

In your Jekyll configuration you need to add the path to the `shared-components` folder like this:

```
shared_components_path: _includes/shared-components
```

And you need to add the \_temp/ folder to your exclude list

You also need a Generator called `sharedcomponents.rb` in your \_plugins folder that looks like this:

```
require 'fileutils'

module SharedComponents
  class Generator < Jekyll::Generator
    def generate(site)
      asset_path = site.config['shared_components_path'] + '/assets/**/*.{js,png,svg,gif,map}'
      temp_path = "_temp/"
      base_partials_path = site.config['shared_components_path'] + '/includes/**/*.{html}'
      partials_path = temp_path + site.config['shared_components_path'] + '/includes/**/*.{liquid}'
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
          destination_path = full_path + "/" + File.basename(filePath).sub('.html', '.liquid')

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
end

```

This Generator will copy the JavaScript and the other assets to the static Folders in Jekyll.

## SCSS

To include the Styles of the `shared-components` you need to add this to your site.scss after the charset pretty much at the top:

```
@function static-assets($url) {
  $basePath: '/_includes/shared-components/assets/';
  $assetPath: $basePath + str-slice($url, 4);

  @debug $assetPath;

  @return url(#{$assetPath});
}

$shared-components: false;

@import "../../_includes/shared-components/assets/scss/index";
```

This will load the basic styles. At the end of that site.scss you need to load the colors of the site you want. For `Radiusaas` it would be:

```
@import "../../_includes/shared-components/assets/scss/themes/radiusaas";
```

In your \_user-variables.scss you need to add the scss variable for the site:

```
$site: "radiusaas";
```

For all layouts you use you need to change the body class from

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
  src="{{site.baseurl}}/assets/js/app.js"
  id="appjs"
></script>
```

Replace `text/javascript` with `module`

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

git clone https://github.com/c4a8-web/shared-components.git

```
