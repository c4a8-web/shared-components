# Workflow

If you want to update the shared components for a site, this is what you need to do.

Usually there should be no component changes in any site. The main goal is to have all components in the shared components.
So if you need to update a component that has not yet been migrated please consider delaying that change or move the component to
the shared components. More details about that can be found in the Migration section.

This is true to the templates, stylesheets and javascript files. A site will only hold the content and the configuration after everything is migrated.

## Deployment

So after you made your changes to the shared components and you want to deploy that change to one or several sites you need to do the following steps.

1. Commit your changes to git

After that an automated build is triggered which will show the updated version here [Shared-Components](https://c4a8-web.github.io/shared-components/).
So you can check if everything still works properly and if not look at some issues that might occur. After everything works you proceed with

2. Create a tag for your version

A tag is basically a specific version that can then be deployed and released. You can do this through your git client or through the [Github website](https://github.com/c4a8-web/shared-components/releases/new). Usually you use the latest master / main branch to create a tag from. The Structure is _Major Version.Minor Version.Patch_. So for instance usually you
would just increase the last number so if you are on 0.0.10 you would increase it to 0.0.11. If you made a bigger change you can also increase the minor version and if you made a big change you can also increase the major version.

3. Check if your tag is pushed

Sometimes if you create a tag locally you still need to push it like a commit so it is available on the Github Page with the tags.

4. Update the preinstall script

For each site you need to change the _.cloudcannon/preinstall_ file. This is usually what a preinstall script would look like. After the --branch parameter you need to change
the version to your new one and commit that change.

```
#!/bin/bash

cd ./_includes
rm -Rf shared-components

git clone --branch 0.0.15 https://github.com/c4a8-web/shared-components.git

```

5. Commit the submodule of the shared components

You also need to commit the submodule changes. If you just work on one site you only need to commit them once but if you want multiple sites to have that change you need to update all of them. For that you need to go to the site open the submodule and check out the tag you created earlier. This should result in changes in the site repository. These need to be commited.

6. Push all your changes to the repository

So after you did all this you just need to push the changes so cloudcannon will create a new version. I recommend doing those changes on a staging environment so you can verify that everything works and cloudcannon is able to check out the new shared components.

7. Publish your site

After everything is fine you can publish your changes to the production environment.

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

## Full

TODO after figuring out the architecture with kanni

# New Components

TODO describe the process
