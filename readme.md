To use npm for packaging Mojits you first need to update your application.json with a *mojitDirs* key.

    [
        {
            "settings": [ "master" ],

            "mojitDirs": [
                "./node_modules/*"
            ],

            "specs": { ... }
        }
    ]

You can use npm to link to a Mojit as you develop it.

    npm link ../dir/to/mojit

Once you've publish your Mojit it's then installed like any other npm package.

    npm install mojit_package_name

