'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function EarthBWebsiteProject() {
  const router = useRouter()

  return (
    <main className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Back + Projects navigation */}
        <div className="flex items-center justify-between mb-8 mt-4 md:mt-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400"
          >
            ← Back
          </button>
          <Link
            href="/#projects"
            className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Go to Projects
          </Link>
        </div>

        {/* Title + Description */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Website Revamp: There Is No Earth B
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Led redesign for clearer content (events, guides, videos, petitions); improved UX
          to support awareness and community action.
        </p>

        {/* Image */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <Image
              src={require('../../../proj-images/tineb1.png')}
              alt="There Is No Earth B 1"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
