import React from "react";

export const typingParagraphs = [
    {
        id: 1,
        paragraph: `Typing is a simple skill that becomes powerful with regular practice.
            The more you type, the more comfortable your fingers become with the keyboard.
            Good typing speed is not only about moving your fingers quickly.
            Accuracy is equally important because mistakes can reduce your overall performance.
            A focused learner can improve speed by practicing for a few minutes every day.
            It is better to type slowly and correctly than to type quickly with many errors.
            Keeping your eyes on the screen can help you develop better keyboard awareness.
            Try to maintain a comfortable sitting position while practicing.
            Take short breaks when your hands or eyes begin to feel tired.
            With patience and consistency, your typing skills can improve significantly.
            A typing test can measure several aspects of a person's keyboard performance.
            Words per minute, commonly called WPM, represents the speed of typing.
            Accuracy shows how many typed characters or words match the original text.
            The number of mistakes can help identify areas that require additional practice.
            Backspace usage can also provide useful information about typing behavior.
            A timer makes the test more challenging and creates a measurable time limit.
            Different users may choose different durations depending on their practice goals.
            Short tests can be useful for quick practice during a busy day.
            Longer tests can measure consistency and concentration over an extended period.
            Tracking results over time can help users understand their overall improvement.`
    },

    {
        id: 2,
        paragraph: `Technology has changed the way people communicate, work, and learn.
            Computers are now used in schools, offices, hospitals, banks, and many other places.
            The internet allows people to share information within a few seconds.
            Students can attend online classes and access educational resources from anywhere.
            Developers use programming languages to create websites, applications, and games.
            Businesses depend on software to manage customers, products, and financial information.
            Artificial intelligence is becoming an important part of modern technology.
            Cloud services allow users to store and access data without physical devices.
            Learning digital skills can create many opportunities in the modern workplace.
            The future will continue to bring new tools that change everyday life.
            Reading regularly can improve vocabulary, concentration, and communication skills.
            Books, articles, and educational materials expose readers to different writing styles.
            When you encounter an unfamiliar word, try to understand it from the context.
            Writing down new words can make them easier to remember later.
            Reading slowly can help you understand complex ideas more clearly.
            Reading quickly can be useful when you need to find specific information.
            A balanced reading habit combines both speed and careful understanding.
            Good readers usually develop stronger writing and communication abilities.
            Even ten minutes of reading every day can become a valuable habit.
            The key is to choose interesting material that encourages you to continue.`
    },

    {
        id: 3,
        paragraph: `A successful project usually begins with a clear and simple plan.
            Before writing code, developers should understand what the application needs to do.
            Breaking a large problem into smaller tasks makes development easier.
            Each feature can then be designed, implemented, tested, and improved separately.
            Errors are a normal part of programming and should not discourage beginners.
            Reading error messages carefully can often reveal the cause of a problem.
            Testing an application regularly helps developers find issues at an early stage.
            Clean and organized code is easier to understand and maintain.
            Comments can be useful when they explain complicated parts of the program.
            A good developer learns from mistakes and continuously improves their approach.
            Modern websites are designed to provide fast, accessible, and enjoyable experiences.
            HTML provides the structure that organizes the content of a web page.
            CSS controls the appearance, layout, spacing, colors, and responsive behavior.
            JavaScript adds interaction and allows websites to respond to user actions.
            Frameworks such as React can help developers build complex interfaces efficiently.
            APIs allow applications to communicate with servers and exchange useful information.
            Databases store important data that applications may need to retrieve later.
            Security is important because websites often handle personal and sensitive information.
            Performance should also be considered so pages load quickly on different devices.
            A successful website combines usability, functionality, performance, and good design.`
    },

    {
        id: 4,
        paragraph: `Time management is an important skill for students and professionals.
            A person who plans the day can usually complete tasks with less stress.
            Writing down important tasks makes it easier to remember responsibilities.
            Large tasks can be divided into smaller goals that feel easier to complete.
            Setting a realistic deadline can provide motivation and improve concentration.
            However, taking regular breaks is also important for maintaining productivity.
            Avoiding unnecessary distractions can save a surprising amount of time.
            Mobile phones and social media can interrupt concentration during important work.
            Creating a quiet environment can make studying or coding much easier.
            Small improvements in daily habits can create meaningful results over time.
            Mistakes can be valuable when they are treated as opportunities to learn.
            Nobody becomes highly skilled without making errors during the learning process.
            A beginner may struggle with concepts that later become completely natural.
            Instead of becoming frustrated, try to understand why the mistake happened.
            Writing down repeated mistakes can help you recognize common patterns.
            Practice the difficult part again until the process becomes more comfortable.
            As your confidence increases, you will begin solving problems more independently.
            Feedback from teachers, mentors, or experienced developers can also be helpful.
            Progress may sometimes feel slow, but small improvements still matter.
            Consistency is often more important than trying to become perfect immediately.`
    },

    {
        id: 5,
        paragraph: `Learning to program requires curiosity, patience, and regular practice.
            At first, programming concepts may appear confusing or difficult to understand.
            Variables, functions, loops, and conditions become easier with practical examples.
            Writing small programs is often more useful than only reading theoretical explanations.
            When a program does not work, debugging helps identify what went wrong.
            Searching for documentation can teach you how a particular feature should be used.
            Developers should understand the solution instead of simply copying code.
            Building personal projects is an excellent way to strengthen programming knowledge.
            Every completed project provides experience that can be used in the next project.
            The most important thing is to keep learning even when progress feels slow.
            The goal of a typing practice application is to make learning measurable and engaging.
            A user can select a time limit and begin typing the displayed paragraph.
            The application can calculate typing speed after the test has finished.
            It can also calculate accuracy based on correctly typed characters.
            The number of backspace presses can provide additional information about mistakes.
            A result screen can display WPM, accuracy, errors, and total characters typed.
            Users can repeat the test to compare their latest score with previous attempts.
            A simple interface makes it easier for users to focus on the typing task.
            Progress tracking can motivate users to practice regularly and improve their scores.
            With useful feedback and consistent practice, typing can become faster and more accurate.`
    },
];


export function getParagraph(paraList) {
    let randomIndex = Math.floor(Math.random() * paraList.length);
    return paraList[randomIndex]
}

console.log(getParagraph(typingParagraphs));