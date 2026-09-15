/* =========================================================
   DEVORA PORTFOLIO
   Interactive JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PRELOADER
    ===================================================== */

    const preloader =
        document.getElementById("preloader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            preloader.classList.add("hide");

        }, 600);

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");


    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");

    });


    document.querySelectorAll(".nav-link")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

            });

        });


    /* =====================================================
       DARK / LIGHT MODE
    ===================================================== */

    const themeToggle =
        document.getElementById("themeToggle");


    const savedTheme =
        localStorage.getItem("portfolio-theme");


    if (savedTheme === "light") {

        document.body.classList.add("light");

        themeToggle.textContent = "☾";

    }


    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");


        themeToggle.textContent =
            isLight ? "☾" : "☼";


        localStorage.setItem(
            "portfolio-theme",
            isLight ? "light" : "dark"
        );

    });


    /* =====================================================
       TYPING ANIMATION
    ===================================================== */

    const typingText =
        document.getElementById("typingText");


    const words = [

        "Software Engineer",
        "Web Developer",
        "Android Developer",
        "Problem Solver",
        "Tech Enthusiast"

    ];


    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;


    function typeEffect() {

        const currentWord =
            words[wordIndex];


        if (!deleting) {

            typingText.textContent =
                currentWord.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;


            if (charIndex === currentWord.length) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1400
                );

                return;
            }

        } else {

            typingText.textContent =
                currentWord.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;


            if (charIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) %
                    words.length;

            }

        }


        setTimeout(
            typeEffect,
            deleting ? 50 : 90
        );

    }


    typeEffect();


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navItems =
        document.querySelectorAll(
            ".nav-link"
        );


    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        navItems.forEach(link => {

                            link.classList.remove(
                                "active"
                            );

                            if (
                                link.getAttribute("href") ===
                                "#" + entry.target.id
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            }

                        });

                    }

                });

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });


    /* =====================================================
       PROJECT FILTER
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(
            ".filter-btn"
        );


    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                button.classList.add(
                    "active"
                );


                const filter =
                    button.dataset.filter;


                projectCards.forEach(card => {

                    const categories =
                        card.dataset.category;


                    if (
                        filter === "all" ||
                        categories.includes(filter)
                    ) {

                        card.classList.remove(
                            "hidden"
                        );

                        card.animate(
                            [
                                {
                                    opacity: 0,
                                    transform:
                                        "translateY(15px)"
                                },
                                {
                                    opacity: 1,
                                    transform:
                                        "translateY(0)"
                                }
                            ],
                            {
                                duration: 350,
                                easing:
                                    "ease-out"
                            }
                        );

                    } else {

                        card.classList.add(
                            "hidden"
                        );

                    }

                });

            }
        );

    });


    /* =====================================================
       PROJECT DATA
    ===================================================== */

    const projectData = {

        resume: {

            category:
                "AI + FULL STACK",

            title:
                "AI Resume Analyzer",

            description:
                "An intelligent application designed to analyze resumes, identify relevant skills and provide useful insights for job opportunities.",

            problem:
                "Recruiters and candidates often spend significant time reviewing resumes and comparing skills with job requirements.",

            solution:
                "The application concept uses automated analysis to extract useful information from resumes and organize it into meaningful insights.",

            features: [

                "Resume information analysis",
                "Skill identification",
                "Job requirement comparison",
                "Candidate insights",
                "Clean and responsive interface"

            ],

            tech: [

                "Python",
                "AI / ML",
                "SQL",
                "HTML",
                "CSS",
                "JavaScript"

            ],

            role:
                "Frontend development, application logic, database design and integration planning.",

            github:
                "#",

            demo:
                "#"

        },


        truth: {

            category:
                "ANDROID + AI",

            title:
                "AI Truth & Dare Gaming App",

            description:
                "An interactive Android gaming application combining AI-generated challenges, multiplayer gameplay and Firebase-powered features.",

            problem:
                "Traditional Truth & Dare games have limited challenge variety and often lack interactive digital features.",

            solution:
                "The application creates an interactive digital gaming experience with AI-generated challenges, multiplayer rooms, profiles and achievements.",

            features: [

                "Login and Register",
                "AI Truth generator",
                "AI Dare generator",
                "Spin Wheel",
                "Multiplayer Room",
                "Voice Challenge",
                "Leaderboard",
                "Achievements",
                "Firebase integration"

            ],

            tech: [

                "Kotlin",
                "Android Studio",
                "Firebase",
                "AI APIs",
                "Cloud Storage"

            ],

            role:
                "Android UI development, Firebase integration, application logic, feature design and AI integration.",

            github:
                "#",

            demo:
                "#"

        },


        devora: {

            category:
                "FRONTEND DEVELOPMENT",

            title:
                "Devora Portfolio",

            description:
                "A premium responsive developer portfolio designed with modern CSS architecture, interactive components and a strong visual identity.",

            problem:
                "A basic portfolio often shows information without demonstrating the developer's actual design, frontend and interaction skills.",

            solution:
                "Devora presents skills and projects as interactive experiences using CSS Grid, Flexbox, responsive design, animations and JavaScript.",

            features: [

                "Responsive architecture",
                "Interactive skill cards",
                "Project filtering",
                "Case study modals",
                "Dark / Light theme",
                "Typing animation",
                "Scroll animations",
                "Mobile navigation"

            ],

            tech: [

                "HTML5",
                "CSS3",
                "JavaScript",
                "CSS Grid",
                "Flexbox",
                "CSS Variables"

            ],

            role:
                "UI architecture, responsive CSS, interaction design, JavaScript functionality and overall portfolio development.",

            github:
                "#",

            demo:
                "#"

        },


        waste: {

            category:
                "IOT + DATA",

            title:
                "Smart Waste Management",

            description:
                "A smart waste management system concept focused on monitoring, classification and data-driven waste management.",

            problem:
                "Traditional waste collection can be inefficient because waste levels and collection requirements are not monitored intelligently.",

            solution:
                "The proposed system combines IoT concepts, sensors and data monitoring to improve waste collection and management.",

            features: [

                "Smart bin monitoring",
                "Waste level detection",
                "Waste classification concept",
                "Data monitoring",
                "Collection optimization",
                "Dashboard concept"

            ],

            tech: [

                "IoT",
                "ESP8266",
                "Sensors",
                "Python",
                "ThingSpeak",
                "Data Analytics"

            ],

            role:
                "System design, frontend/dashboard concept, data flow planning and application architecture.",

            github:
                "#",

            demo:
                "#"

        },


        chat: {

            category:
                "REAL-TIME APPLICATION",

            title:
                "ChatConnect",

            description:
                "A real-time chat application designed with authentication, Firebase database integration and interactive messaging.",

            problem:
                "Users need a simple and responsive platform to communicate in real time with secure authentication.",

            solution:
                "ChatConnect uses Firebase services to create a practical real-time communication experience.",

            features: [

                "User authentication",
                "Real-time messaging",
                "Firebase database",
                "User interface",
                "Message synchronization"

            ],

            tech: [

                "Java",
                "Android",
                "Firebase",
                "Firestore",
                "XML"

            ],

            role:
                "Android interface development, Firebase integration, authentication and messaging logic.",

            github:
                "#",

            demo:
                "#"

        },


        studymate: {

            category:
                "AI + EDUCATION",

            title:
                "AI StudyMate",

            description:
                "An AI-powered study application concept designed to help students organize learning, revision and study resources.",

            problem:
                "Students often struggle to organize study material and maintain a consistent revision workflow.",

            solution:
                "AI StudyMate combines learning utilities with AI-assisted features to create a more organized digital study environment.",

            features: [

                "Study organization",
                "AI-assisted learning",
                "Notes management",
                "Revision workflow",
                "Firebase integration",
                "Student-focused UI"

            ],

            tech: [

                "AI",
                "Firebase",
                "JavaScript",
                "HTML",
                "CSS"

            ],

            role:
                "UI design, frontend development, Firebase integration and feature planning.",

            github:
                "#",

            demo:
                "#"

        }

    };


    /* =====================================================
       SKILL DATA
    ===================================================== */

    const skillData = {

        cpp: {

            category:
                "PROGRAMMING + DSA",

            title:
                "C++ & Data Structures",

            description:
                "I use C++ for programming practice, problem solving and understanding core data structures and algorithms.",

            focus: [

                "OOP",
                "Arrays & Strings",
                "Searching",
                "Sorting",
                "STL",
                "Time Complexity",
                "Problem Solving",
                "DSA"

            ],

            projects: [

                ["Smart Waste Management", "Data + IoT"],
                ["Placement DSA Practice", "Problem Solving"]

            ]

        },


        java: {

            category:
                "PROGRAMMING",

            title:
                "Java",

            description:
                "Java is one of my core programming languages for object-oriented programming and application development.",

            focus: [

                "OOP",
                "Classes & Objects",
                "Inheritance",
                "Polymorphism",
                "Collections",
                "Exception Handling"

            ],

            projects: [

                ["ChatConnect", "Android + Firebase"],
                ["AI StudyMate", "Application Development"]

            ]

        },


        python: {

            category:
                "PROGRAMMING + DATA",

            title:
                "Python",

            description:
                "I use Python for data processing, automation, AI-related applications and problem solving.",

            focus: [

                "Python Fundamentals",
                "Pandas",
                "NumPy",
                "Matplotlib",
                "Data Processing",
                "AI Concepts"

            ],

            projects: [

                ["AI Resume Analyzer", "AI + Full Stack"],
                ["Smart Waste Management", "IoT + Data"]

            ]

        },


        javascript: {

            category:
                "WEB DEVELOPMENT",

            title:
                "JavaScript",

            description:
                "JavaScript helps me build interactive and dynamic web interfaces.",

            focus: [

                "DOM Manipulation",
                "Events",
                "ES6",
                "APIs",
                "Async JavaScript",
                "Interactive UI"

            ],

            projects: [

                ["Devora Portfolio", "Frontend"],
                ["AI Resume Analyzer", "Web"]

            ]

        },


        android: {

            category:
                "MOBILE DEVELOPMENT",

            title:
                "Android Development",

            description:
                "I build Android application concepts using modern UI, application logic and Firebase services.",

            focus: [

                "Android Studio",
                "Kotlin",
                "Java",
                "Firebase",
                "UI Development",
                "Application Architecture"

            ],

            projects: [

                ["AI Truth & Dare", "Android + AI"],
                ["ChatConnect", "Real-time App"],
                ["AI StudyMate", "Education"]

            ]

        },


        sql: {

            category:
                "DATABASE",

            title:
                "SQL / MySQL",

            description:
                "I use SQL to understand, manage and query structured data.",

            focus: [

                "SELECT Queries",
                "Joins",
                "Subqueries",
                "Aggregate Functions",
                "Database Design",
                "CRUD Operations"

            ],

            projects: [

                ["AI Resume Analyzer", "AI + Full Stack"]

            ]

        },


        react: {

            category:
                "FRONTEND",

            title:
                "React",

            description:
                "I use React concepts to understand component-based frontend development and modern UI architecture.",

            focus: [

                "Components",
                "Props",
                "State",
                "Hooks",
                "Context API",
                "Reusable UI"

            ],

            projects: [

                ["Web Development Projects", "Frontend"]

            ]

        },


        tools: {

            category:
                "DEVELOPER TOOLS",

            title:
                "Developer Tools",

            description:
                "I use modern development tools to write, debug, test and manage projects.",

            focus: [

                "VS Code",
                "Android Studio",
                "Git",
                "GitHub",
                "Firebase",
                "Chrome DevTools"

            ],

            projects: [

                ["Devora Portfolio", "Frontend"],
                ["AI Truth & Dare", "Android"]

            ]

        }

    };


    /* =====================================================
       MODAL FUNCTIONS
    ===================================================== */

    function openModal(modal) {

        modal.classList.add("open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );

    }


    function closeModal(modal) {

        modal.classList.remove("open");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );

    }


    /* =====================================================
       SKILL MODAL
    ===================================================== */

    const skillModal =
        document.getElementById(
            "skillModal"
        );


    const skillTitle =
        document.getElementById(
            "skillModalTitle"
        );


    const skillCategory =
        document.getElementById(
            "skillModalCategory"
        );


    const skillDescription =
        document.getElementById(
            "skillModalDescription"
        );


    const skillFocus =
        document.getElementById(
            "skillFocus"
        );


    const relatedProjects =
        document.getElementById(
            "relatedProjects"
        );


    document.querySelectorAll(".skill-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const data =
                        skillData[
                            card.dataset.skill
                        ];


                    if (!data) return;


                    skillCategory.textContent =
                        data.category;


                    skillTitle.textContent =
                        data.title;


                    skillDescription.textContent =
                        data.description;


                    skillFocus.innerHTML =
                        data.focus
                            .map(
                                item =>
                                    `<span>${item}</span>`
                            )
                            .join("");


                    relatedProjects.innerHTML =
                        data.projects
                            .map(
                                project =>
                                    `
                                    <button
                                        class="related-project"
                                        data-related="${project[0]}">

                                        <strong>
                                            ${project[0]}
                                        </strong>

                                        <small>
                                            ${project[1]}
                                        </small>

                                    </button>
                                    `
                            )
                            .join("");


                    relatedProjects
                        .querySelectorAll(
                            ".related-project"
                        )
                        .forEach(button => {

                            button.addEventListener(
                                "click",
                                () => {

                                    const projectName =
                                        button.dataset.related;


                                    const project =
                                        Object.values(
                                            projectData
                                        ).find(
                                            item =>
                                                item.title ===
                                                projectName
                                        );


                                    if (project) {

                                        closeModal(
                                            skillModal
                                        );

                                        setTimeout(
                                            () => {

                                                openProjectByData(
                                                    project
                                                );

                                            },
                                            250
                                        );

                                    }

                                }
                            );

                        });


                    openModal(skillModal);

                }
            );

        });


    /* =====================================================
       PROJECT MODAL
    ===================================================== */

    const projectModal =
        document.getElementById(
            "projectModal"
        );


    const projectCategory =
        document.getElementById(
            "projectModalCategory"
        );


    const projectTitle =
        document.getElementById(
            "projectModalTitle"
        );


    const projectDescription =
        document.getElementById(
            "projectModalDescription"
        );


    const projectProblem =
        document.getElementById(
            "projectProblem"
        );


    const projectSolution =
        document.getElementById(
            "projectSolution"
        );


    const projectFeatures =
        document.getElementById(
            "projectFeatures"
        );


    const projectTech =
        document.getElementById(
            "projectTech"
        );


    const projectRole =
        document.getElementById(
            "projectRole"
        );


    const githubBtn =
        document.getElementById(
            "githubBtn"
        );


    const demoBtn =
        document.getElementById(
            "demoBtn"
        );


    function openProjectByData(data) {

        projectCategory.textContent =
            data.category;


        projectTitle.textContent =
            data.title;


        projectDescription.textContent =
            data.description;


        projectProblem.textContent =
            data.problem;


        projectSolution.textContent =
            data.solution;


        projectFeatures.innerHTML =
            data.features
                .map(
                    feature =>
                        `<div class="modal-feature">
                            ${feature}
                        </div>`
                )
                .join("");


        projectTech.innerHTML =
            data.tech
                .map(
                    tech =>
                        `<span>${tech}</span>`
                )
                .join("");


        projectRole.textContent =
            data.role;


        githubBtn.href =
            data.github;


        demoBtn.href =
            data.demo;


        openModal(projectModal);

    }


    document.querySelectorAll(
        ".case-study-btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                const data =
                    projectData[
                        button.dataset.project
                    ];


                if (data) {

                    openProjectByData(data);

                }

            }
        );

    });


    /* =====================================================
       CLOSE MODALS
    ===================================================== */

    document.querySelectorAll(
        "[data-close]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const modal =
                    document.getElementById(
                        button.dataset.close
                    );


                closeModal(modal);

            }
        );

    });


    document.querySelectorAll(
        ".modal-overlay"
    ).forEach(overlay => {

        overlay.addEventListener(
            "click",
            () => {

                const modal =
                    overlay.closest(".modal");

                closeModal(modal);

            }
        );

    });


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                document
                    .querySelectorAll(".modal.open")
                    .forEach(modal => {

                        closeModal(modal);

                    });

            }

        }
    );


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    const formMessage =
        document.getElementById(
            "formMessage"
        );


    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            formMessage.textContent =
                `Thank you ${name}! Your message is ready to be sent.`;


            contactForm.reset();

        }
    );


    /* =====================================================
       COUNTER ANIMATION
    ===================================================== */

    const counters =
        document.querySelectorAll(
            "[data-count]"
        );


    let countersStarted = false;


    const counterObserver =
        new IntersectionObserver(
            entries => {

                if (
                    entries.some(
                        entry =>
                            entry.isIntersecting
                    ) &&
                    !countersStarted
                ) {

                    countersStarted = true;


                    counters.forEach(counter => {

                        const target =
                            Number(
                                counter.dataset.count
                            );


                        let current = 0;


                        const increment =
                            Math.max(
                                1,
                                Math.ceil(
                                    target / 30
                                )
                            );


                        const timer =
                            setInterval(
                                () => {

                                    current +=
                                        increment;


                                    if (
                                        current >=
                                        target
                                    ) {

                                        current =
                                            target;

                                        clearInterval(
                                            timer
                                        );

                                    }


                                    counter.textContent =
                                        current;

                                },
                                40
                            );

                    });

                }

            }
        );


    const statsSection =
        document.querySelector(
            ".stats-section"
        );


    if (statsSection) {

        counterObserver.observe(
            statsSection
        );

    }


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const floatingTop =
        document.getElementById(
            "floatingTop"
        );


    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 500
            ) {

                floatingTop.classList.add(
                    "visible"
                );

            } else {

                floatingTop.classList.remove(
                    "visible"
                );

            }

        }
    );


    floatingTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =====================================================
       PROJECT CARD KEYBOARD ACCESS
    ===================================================== */

    document.querySelectorAll(
        ".project-card"
    ).forEach(card => {

        card.addEventListener(
            "click",
            event => {

                if (
                    event.target.closest(
                        ".case-study-btn"
                    )
                ) {
                    return;
                }

                const data =
                    projectData[
                        card.dataset.project
                    ];


                if (data) {

                    openProjectByData(data);

                }

            }
        );

    });

});