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

You can use npm to link to the required Mojit as you develop it.

    npm link ../dir/to/mojit

Then when your done you install it like any other package.

    npm install mojit_package_name

