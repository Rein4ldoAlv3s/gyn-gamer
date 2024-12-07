import React from 'react'

const MinhaConta = () => {
    return (
        <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-white">Profile</h2>
                    <p className="mt-1 text-sm/6 text-white">
                        This information will be displayed publicly so be careful what you share.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm/6 font-medium text-white">
                                Username
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">workcation.com/</div>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="janesmith"
                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-white placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MinhaConta