


export default function MovieShow({value}){


    return <div className="max-w-xs rounded overflow-hidden shadow-lg shadow-slate-700 bg-slate-100">
                <img className="w-full" src={value.Poster} alt={value.Title} />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{value.Title}</div>
                <p className="text-gray-700 text-base">This film is good filim and itis pop in hollywood</p>
                </div>
                <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{value.Type}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{value.Year}</span>
                </div>
            </div>

};