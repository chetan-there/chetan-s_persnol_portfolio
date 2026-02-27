import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "Understand HTML & CSS Like a Pro – Beginner to Advanced Guide",
    description:
      "Master HTML and CSS with structured learning from basics to advanced layout techniques, responsive design, and best practices.",
    date: "February 2026",
    link: "https://medium.com/@therechetan24/understand-html-css-like-a-pro-beginner-to-advanced-guide-c613b11fdbb8",
  },
  {
    title: "Understand JavaScript Like a Pro – Beginner to Advanced Guide",
    description:
      "Deep dive into JavaScript covering fundamentals, ES6+, asynchronous programming, and real-world concepts in a beginner-friendly way.",
    date: "February 2026",
    link: "https://medium.com/@therechetan24/understand-javascript-like-a-pro-beginner-to-advanced-guide-5859b2fe2345",
  },
   {
    title: "Understand React Like a Pro – Beginner to Advanced Guide",
    description:
      "A complete guide to mastering React from fundamentals to advanced concepts with clear explanations and practical examples.",
    date: "February 2026",
    link: "https://medium.com/@therechetan24/understand-react-like-a-pro-beginner-to-advanced-guide-%EF%B8%8F-7bb68f145030",
  },
  {
  "title": "Learn These 15 Things to Master Core Java – Beginner to Advanced Guide",
  "description": "A complete guide to mastering Core Java with essential topics, real-world explanations, and interview insights for beginners to advanced learners.",
  "date": "February 2026",
  "link": "https://medium.com/@therechetan24/learn-these-15-things-to-master-core-java-7609b2feae9c"
},{
  "title": "Learn These 12 Things to Master Advanced Java – JDBC, Servlet & JSP Guide",
  "description": "A complete guide to mastering Advanced Java with JDBC, Servlet, and JSP — essential topics, real-world explanations, hands-on practice levels, and interview insights for backend developers.",
  "date": "February 2026",
  "link": "https://medium.com/@therechetan24/learn-these-12-things-to-master-advanced-java-jdbc-servlet-jsp-2c0b02bf3882"
},{
  "title": "How to Master Any Spring Module (Example: Spring Core)",
  "description": "A systematic and practical guide to mastering any Spring module, using Spring Core as an example — including concepts, hands-on steps, real project practice, debugging insights, and interview readiness.",
  "date": "February 2026",
  "link": "https://medium.com/@therechetan24/how-to-master-any-spring-module-example-spring-core-7baff3e4d706"
}
];

export const Blogs = () => {
  return (
    <section id="blogs" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Knowledge Sharing
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Articles from{" "}
            <span className="font-serif italic font-normal text-white">
              my development journey.
            </span>
          </h2>

          <p className="text-muted-foreground text-lg">
            I share structured beginner-to-advanced technical guides to help developers
            understand frontend concepts clearly and practically.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="glass p-6 rounded-3xl glow-border hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {blog.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {blog.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Calendar size={16} />
                  {blog.date}
                </div>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};