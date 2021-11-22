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

## Git Submodule

You need to add this project as a git submodule to the project you want to use the `shared-components`. Add a .gitmodules File or add them via GUI.

```
[submodule "_includes/shared-components"]
	path = _includes/shared-components
	url = git@github.com:c4a8-web/shared-components.git
```

## Jekyll

In your Jekyll configuration you need to add the path to the `shared-components` folder like this:

```
shared_components_path: _includes/shared-components/assets
```

You also need a Generator called `sharedcompeonts.rb` in your \_plugins folder that looks like this:

```
module SharedComponents
  class Generator < Jekyll::Generator
    def generate(site)
      asset_path = site.config['shared_components_path'] + '/**/*.{js,png,svg,gif}'
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

This should be everything you need to use the `shared-components` Styles. If you want to load an image through scss use the function `assets()` this will make sure the paths are correct.

## JavaScript

To add the JavaScript to your site you need to import the Main JavaScript into your app.js like this:

```
import { State } from '/_includes/shared-components/assets/js/index.js';
```

If you don't need the State in your Code you can import it without it. Everything else is handled by the JavaScript itself.
