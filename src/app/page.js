export default function Home() {
  return (
    <main className="flex min-h-screen p-24 space-y-10">
      <div className="w-1/2 items-center font-mono text-sm">
        <div>
          <h1 className="text-4xl font-bold">Hello,</h1>
          <h2 className="text-xl mt-6">This is the beggining of CI/CD</h2>
        </div>
        {/* <form className="mt-20">
          <div className="w-1/2">
            <label
              for="thought"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Enter your thoughts here
            </label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="thought"
                id="thought"
                class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="What are you thinking about?"
              />
            </div>
          </div>
        </form> */}
      </div>
    </main>
  );
}
