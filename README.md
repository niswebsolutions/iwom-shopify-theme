# IWOM Theme Development

This theme is for the IWOM Outerwear LLC Shopify theme.

## Polymer

This theme uses some polymer web components that are located in the `polymer/`
directory.  This directory is a Polymer `app` which means it's a collection of
multiple components.

To include components in the theme, you need to bundle the polymer imports together into a single file and place it in the assets folder. Luckily, there is a script to do this.

Once the file is bundled, it is added into the `theme.liquid` page

```html
<script src="{{ 'webcomponents-lite.min.js' | asset_url }}"></script>
<link href="{{ 'build.html' | asset_url }}" rel="import"/>
```

### Bundle Polymer imports

Add all of your imports to the `polymer/src/polymer-app/polymer-app.html` file.

Run the bundler

```bash
$ npm run bundle
```

This will place all of your polymer dependecies into the `assets/build.html` file.

Now make sure you upload the new file to Shopify with the `theme` global command

```bash
$ theme upload
```
