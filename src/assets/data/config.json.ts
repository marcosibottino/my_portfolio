import {iconsData} from './icons.json';

export const config = [{
        profile: {
            imgProfile: {
                path: 'https://avatars.githubusercontent.com/u/121776415?s=400&u=cc36dac95c29fc9aa1564633dbc0d2b05e6b479b&v=4',
                tooltip: 'Marcos Bottino'
            },
            name: 'Marcos Bottino',
            prof: 'Software Developer',
            buttons: {
                first: {
                    name: 'Github',
                    url: 'https://github.com/marcosibottino',
                    tooltip: 'Look at my portfolio on GitHub! 🙌'
                },
                second: {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/marcosbottino/',
                    tooltip: 'Look at my profile on LinkedIn! 🙌'
                }
            },
            mby: {
                sentence: 'Made with',
                logo: '/_next/static/media/next.d23f4e05.png'
            }
        },
        skills: {
            description: {
                title: 'Hello! Welcome....',
                text: 'For many years, I have been committed to finding ways to solve problems safely, efficiently, and quickly. As a result of this pursuit, I decided to start my career as a software developer 👨‍💻, in order to apply these skills in the workplace. Currently, my goal is to continue improving my skills and furthering my professional development in this field. I am motivated by the idea of facing new challenges and continuing to learn in the future. 🙌',
                icon: 'https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif'
            },
            languages: {
                title: 'Top Languages',
                icons: iconsData
            },
            projects: {
                first: {
                    title: 'SocialMediaProject',
                    description: "In this project you can create topics and share posts. Enjoy it! 😊",
                    languages: {
                        first: 'react',
                        second: 'nextjs'
                    },
                    url: 'https://github.com/marcosibottino/SocialMediaProject',
                    tooltip_url: 'Have fun! 💪'
                },
                second: {
                    title: 'Emirates_app',
                    description: "In this project you will be able to see the trip of a user. Enjoy it! 😊",
                    languages: {
                        first: 'angular',
                        second: 'typescript'
                    },
                    url: 'https://github.com/marcosibottino/Emirates_app',
                    tooltip_url: 'Have fun! 💪'
                }
            }
        }
}]