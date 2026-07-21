export default function Home() {
    return (
        <main className="container">

            <section> //Groups the hero content together. It also improves semantic HTML.
                <h1>Make a AI applications here!</h1>

                <p>Let's build the AI based applications faster with CSS and Nextjs</p>

                <button className="bg-white text-black">Let's Go</button>

                <div className="aspect-video">
                    <img
                    src="/AI_dashboard.webp"/>
                </div>
            </section>

        </main>
    );
}