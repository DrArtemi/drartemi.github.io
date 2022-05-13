import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/DrArtemi/drartemi.github.io.git',
        user: {
            name: 'Adrien Milcent',
            email: 'adrien.milcent@outlook.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);