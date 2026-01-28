interface Feature {
  readonly title: string
  readonly description: string
  readonly icon: React.ReactNode
}

const features: readonly Feature[] = [
  {
    title: 'Smart Priorities',
    description: 'AI-powered task prioritization that learns your workflow and surfaces what matters most.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Natural Deadlines',
    description: "Set deadlines in plain language. 'Next Tuesday' or 'End of week' just works.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Distraction-Free',
    description: 'A minimal interface designed for focus. No clutter, no complexity, just your tasks.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
]

function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Organize your day,{' '}
            <span className="text-indigo-600">effortlessly</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-[65ch] leading-relaxed">
            TaskFlow helps busy professionals manage tasks with smart priorities,
            natural deadlines, and a distraction-free design.
          </p>
          <div className="mt-10">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="get-started" className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Everything you need to stay on track
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Simple tools that work the way you think.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section id="try-free" className="py-20 lg:py-32 bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Start organizing your life today
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Join thousands of professionals who've simplified their daily workflow.
        </p>
        <div className="mt-10">
          <a
            href="#try-free"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Try TaskFlow Free
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          No credit card required
        </p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <main>
      <Hero />
      <Features />
      <CallToAction />
    </main>
  )
}
