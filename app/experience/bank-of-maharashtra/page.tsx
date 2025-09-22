'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function BankOfMaharashtraCaseStudy() {
  const router = useRouter()
  const images = [
    require('../../../images/bom1.png'),
    require('../../../images/bom2.png'),
    require('../../../images/bom3.png'),
    require('../../../images/bom4.png'),
    require('../../../images/bom5.png'),
    require('../../../images/bom6.png'),
  ]

  return (
    <main className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8 mt-4 md:mt-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400"
          >
            ← Back
          </button>
          <Link href="/#experience" className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
            Go to Experience
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Case Study: Bank of Maharashtra — Risk Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          SVM and Z-score models to predict financial distress (89% accuracy), sentiment analysis with NLTK, and stakeholder-ready visualisations with Matplotlib.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <Image src={src} alt={`Bank of Maharashtra ${idx + 1}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}


