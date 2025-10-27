function About() {
  return (
    <section
      id="about"
      className="py-20 bg-linear-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About NxtRole.AI
            </h2>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae illo vero voluptas iure! Amet cumque a asperiores quod
              atque voluptatum necessitatibus iure consequatur, nulla libero
              incidunt dolore aut quis porro! Ab obcaecati optio quidem ratione
              voluptas voluptate repellat enim reiciendis necessitatibus neque,
              facere autem ad odio beatae quaerat ducimus vel animi, officiis
              libero veritatis? Nostrum iusto magni eaque nulla dolores. Ipsum
              vel fugit, omnis explicabo sit eum, atque molestias assumenda
              voluptatem repellendus quidem sed illum inventore tempore debitis
              obcaecati hic. Impedit adipisci voluptatibus ut non magnam
              laboriosam. Nam, quia debitis!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src="/image.png" alt="logo" className="w-96 h-96" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
