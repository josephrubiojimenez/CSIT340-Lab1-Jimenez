import '/src/index.css'

export default function App() {
  return(
  <div>
    <header className="max-w-2xl mx-auto px-6 pt-16">
    <h1 className="text-4xl font-semibold tracking-tight">Joseph R. Jimenez</h1>
    <p className="mt-2 text-lg text-slate-600">Third year BSIT student at Cebu Institute of Technology – University.</p>
    <hr className="mt-8 border-slate-200" />
  </header>

  <main className="max-w-2xl mx-auto px-6 py-10">

    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">About</h2>
      <p className="leading-relaxed text-slate-700" />
        I grew up in Negros Oriental and moved to Cebu City for elementary and college. I chose IT because I am passionate about creating technology or systems that scale and solves problems of people such as boring workflow, or daily problems. Also, being a techy person is something I can be proud of its because in the coming future knowing how to program, how to code to solve real-world problems is a must nowadays and in the fast approaching future. I really love to build something unique that really matters through my hard and soft skills.
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Details</h2>
      <p className="leading-relaxed text-slate-700">
        Course: BS Information Technology
        <br />
        Year level: Third year
        <br />
        Hometown: Bulacao, Cebu City
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Things I like</h2>
      <ul className="list-disc list-inside space-y-1 text-slate-700">
        <li>Playing Online and Offline Games</li>
        <li>Reading articles about what is happening globally.</li>
        <li>Drinking Strawberry tea</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3">Reach me</h2>
      <p className="leading-relaxed text-slate-700">
        joseph.jimenez@cit.edu
        <br />
        @josephjimeneeez.gmail.com on most things
      </p>
    </section>

  </main>

  <section className="max-w-2xl mx-auto px-6 pb-16">
    <hr className="mb-6 border-slate-200" />
    <p className="text-sm text-slate-500">Made for CSIT340.</p>
  </section>
  </div>
    )
}

