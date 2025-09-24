'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SmartAgricultureProject() {
  const router = useRouter()

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
          <Link href="/#projects" className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
            Go to Projects
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Mitigating Climate Change via Smart Agriculture
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Soil temperature forecasting using RF/SVM/kNN on multi‑year EDS data; presented at ICSTA 2023 and published in Springer Proceedings (ICT).
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <Image src={require('../../../proj-images/spr1.png')} alt="Soil Temperature Analysis 1" className="w-full h-auto object-contain" />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <Image src={require('../../../proj-images/spr2.png')} alt="Soil Temperature Analysis 2" className="w-full h-auto object-contain" />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <Image src={require('../../../proj-images/spr3.png')} alt="Soil Temperature Analysis 3" className="w-full h-auto object-contain" />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <Image src={require('../../../proj-images/spr4.png')} alt="Soil Temperature Analysis 4" className="w-full h-auto object-contain" />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <Image src={require('../../../proj-images/spr5.png')} alt="Soil Temperature Analysis 5" className="w-full h-auto object-contain" />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <Image src={require('../../../proj-images/spr6.png')} alt="Soil Temperature Analysis 6" className="w-full h-auto object-contain" />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <Image src={require('../../../proj-images/spr7.png')} alt="Soil Temperature Analysis 7" className="w-full h-auto object-contain" />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <Image src={require('../../../proj-images/spr8.png')} alt="Soil Temperature Analysis 8" className="w-full h-auto object-contain" />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <Image src={require('../../../proj-images/spr9.png')} alt="Soil Temperature Analysis 9" className="w-full h-auto object-contain" />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <Image src={require('../../../proj-images/spr10.png')} alt="Soil Temperature Analysis 10" className="w-full h-auto object-contain" />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <Image src={require('../../../proj-images/spr11.png')} alt="Soil Temperature Analysis 11" className="w-full h-auto object-contain" />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <Image src={require('../../../proj-images/spr12.png')} alt="Soil Temperature Analysis 12" className="w-full h-auto object-contain" />
          </div>
        </div>
          
       
      </div>
    </main>
  )
}
