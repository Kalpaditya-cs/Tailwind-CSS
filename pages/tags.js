export default function App() {
    return (
        <>
            {/* Header */}
            <header>
                <h1>Digital Safety Academy</h1>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Courses</a>
                    <a href="#">Contact</a>
                </nav>
            </header>

            {/* Main Content */}
            <main>
                {/* Article */}
                <article>
                    <h2>Learn HTML</h2>

                    <p>
                        HTML is the{" "}
                        <span
                            style={{
                                color: "blue",
                                fontWeight: "bold",
                            }}
                        >
                            foundation
                        </span>{" "}
                        of every website.
                    </p>

                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube Player"
                        width="560"
                        height="315"
                        allowFullScreen
                    />

                    {/* Details & Summary */}
                    <details>
                        <summary>Read More</summary>

                        <p>
                            HTML stands for HyperText Markup Language.
                        </p>
                    </details>

                    {/* Table */}
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Course</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Kal</td>
                                <td>React</td>
                            </tr>

                            <tr>
                                <td>Rahul</td>
                                <td>Next.js</td>
                            </tr>
                        </tbody>
                    </table>
                </article>

                {/* Aside */}
                <aside>
                    <h3>Related Courses</h3>

                    <ul>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </aside>
            </main>

            {/* Footer */}
            <footer>
                <p>© 2026 Digital Safety. All rights reserved.</p>
            </footer>
        </>
    );
}