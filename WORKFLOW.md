# Workflow

If you want to update the shared components for a site, this is what you need to do.

Usually there should be no component changes in any site. The main goal is to have all components in the shared components.
So if you need to update a component that has not yet been migrated please consider delaying that change or move the component to
the shared components. More details about that can be found in the Migration section.

This is true to the templates, stylesheets and javascript files. A site will only hold the content and the configuration after everything is migrated.

## Deployment

So after you made your changes to the shared components and you want to deploy that change to one or several sites you need to do the following steps.

First you need to create a PR for your feature onto the `develop` branch. After this PR is merged you can see those changes on the development environment system,
after a new build is triggered via cloudcannon or through a commit on that environment. After your feature is approved and tested you can then merge your PR into master.

This will then show up on staging or production environments when you trigger a build via the same methods as mentioned above.

# Migration

There are two ways to migrate a component. The basic version and the full version. The basic way should only be used if you need them quickly and don't have the time to fully migrate the component. Full should always be the goal. 

## Basic

In the basic way you just need to copy the .html and the .scss file to the _includes_ folder for the template and to _assets/scss/components_ for the stylesheets. You also need to add the
import to the _assets/scss/components/\_index.scss_ file so your stlyes will be loaded. The last step is to create a wrapper for your template in the site.

In your site you will create an html file that has the same name as your moved componented. So for instance if i moved the cta.html to the shared components my file would also be named cta.html. Inside that file you need to import the shared component like this:

```
{% include shared-components/includes/cta.html %}
```

After that you should be able to use the component without having to change any content or other references to it. I recommend that you change the comment of the comment at the start and the end of the template from

```
<!-- Cta Section -->
```

to

```
<!-- Shared Cta Section -->
```

For the start and the end. This way you know that your component is serverd from the shared components.

# New Components

## Configuration changes

All configuration changes that are component based need to be done on all sites.

# Add variants

To create new variants for a component or to create a new "story" for a component that has none yet you need to create or change a file with the name of the component in camel case. For instance **eventTeaser.stories.js** with .stories.js at the end.

The structure of that file has to be like this:

```
import { createComponent, getTitle } from '../../.storybook/templates';
import { includesnameofthehtmlfileshtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Component Name in Storybook',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const NameOfTheVariant = Template.bind({});

NameOfTheVariant.args = {
  parameter1: 'value',
};

```

Make sure that the name of the html file is between **includes** and **html** so for event-teaser.html that will be **includeseventteaserhtml** no . or - in the string.

If you only have one variant use the same name as the title so no folder will be created. For more variants use specific names. You need an export block with the args and the parameters for each variant you want to see. After saving you will directly see your variant in storybook. If you don't see it you propably have an error in your story which you will see in the console. Be aware that new stories will be shown at the end of the list and not in alphabetical order. But only for the first time.

When you just add a new variant you can basically copy the last one and just rename the name in those two places and change the paramters accordingly.

## Get Collection Data

To select data from a collection list like casestudies you can use the component get-collection-data like this:

```
{%
  include get-collection-data.html
  id=1
%}
```

To get the data for the collection ( default is casestudies ) or you can pass a collection to the component

```
{%
  include get-collection-data.html
  id=1
  collection=site.collection
%}
```

After that you can use the variable `getCollectionData` and pass the values in that object to a teaser for example like this:

```
{%
  include teaser.html
  overline=getCollectionData.overline
  headline=getCollectionData.title
  text=getCollectionData.hero.subline
  ctaText="Mehr lesen"
  ctaHref=getCollectionData.url
  thumb=getCollectionData.hero.background.img
  alt=getCollectionData.hero.background.alt
  logo=getCollectionData.serviceOverview.logo.img
  logoAlt=getCollectionData.serviceOverview.logo.alt
%}
```
