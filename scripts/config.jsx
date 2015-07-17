var config = { 
    boldTitle: "Beau's ",
    title: 'Application',
    headerImage: "src/img/forge_logo_orange.jpg",
    routes: [
        {
            name: 'forge',
            path: '/forge',
            navTitle: 'Forge',
            navImage: "src/img/forge_anvil.png",
            "default": "true",
            handler: "forge",
            paramRoutes: [
                {
                    name: 'forgeId',
                    path: '/forge/:id'
                }
            ],
            redirects: [
                {
                    from: '/otherForge/:id',
                    to: '/forge/:id'
                }
            ]
        },
        
    ], 
    loginImage: "src/img/forge_logo_orange.jpg" 
};

module.exports = config;