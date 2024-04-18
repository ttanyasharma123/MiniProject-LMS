// aboutService.js

// Assuming you need to fetch some dynamic data for the about page
// For simplicity, let's just export a function that returns a dummy object

module.exports = {
    getAboutData: async () => {
        // You can perform any asynchronous operations here to fetch data
        // For simplicity, let's return a static dummy object
        return {
            mission: "Welcome to our Library Management System! Our mission is to empower individuals to explore the world of literature, expand their knowledge, and cultivate a lifelong love for reading. We are committed to providing a diverse collection of books and resources, accessible to all members of our community, to inspire learning and personal growth.",
            vision: "Our vision is to foster a vibrant reading culture where everyone has the opportunity to discover and engage with quality literature. We envision our library as a hub of intellectual curiosity and creativity, where individuals of all ages and backgrounds can connect, learn, and share ideas. Through our innovative services and programs, we strive to enrich lives and contribute to the intellectual enrichment of society.",
            values: [
                { name: "Excellence", description: "We are committed to delivering excellence in all aspects of our services, from book selection to customer support." },
                { name: "Inclusivity", description: "We celebrate diversity and strive to create an inclusive environment where everyone feels welcome and valued." },
                { name: "Innovation", description: "We embrace innovation and technology to enhance the library experience and adapt to the evolving needs of our patrons." },
                { name: "Community", description: "We believe in the power of community and actively engage with our patrons to foster meaningful connections and collaborations." },
                { name: "Lifelong Learning", description: "We promote lifelong learning and personal development, offering educational programs and resources to support continuous growth and enrichment." }
            ]
        };
    }
};
