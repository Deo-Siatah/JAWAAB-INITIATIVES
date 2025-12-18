import {Plus} from "lucide-react";
import { useState } from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Compass,EyeIcon} from "lucide-react";
export default function AboutPage() {
     const [openMission, setOpenMission] = useState(false);
     const [openVision, setOpenVision] = useState(false);
     const [openValues, setOpenValues] = useState(false);
    
    return (
        <div className="mt-10 bg-white grid grid-cols-1 md:grid-cols-2 gap-20 p-6">
            {/* About Page Content */}
            <div>
                <p className="inline-block bg-emerald-500/90 rounded-full mb-2 text-white text-sm font-merriweather font-bold px-3 py-2 ">About JAWAAB</p>
                <h1 className="font-bold  text-4xl font-extrabold text-black mt-4">Dedicated to Creating 
                    <span className="text-emerald-600"> Lasting </span>
                    <p className="text-emerald-600">  Change </p>
                </h1>
                <p className="font-inter text-gray-500 mt-4 ">
                    JAWAAB Empowerment Initiative is a grassroots organization committed to transforming communities through sustainable development programs. We believe that every individual deserves access to education, 
                    healthcare, and opportunities for growth.
                </p>
            </div>
            {/*Right section*/}
            <div className=" w-full md:ml-20 flex flex-col gap-2">
            <div className="cursor-pointer relative"
                onClick={() => setOpenMission(!openMission)}>
                    <h1 className="flex items-center text-4xl font-bold font-merriweather text-gray-600 mt-8">
                        OUR MISSION
                        <Plus className={`inline-block ml-2 h-8 w-8 text-emerald-600 transition-transform ${openMission ? 'rotate-45' : ""} `}/>
                    </h1>
                    {/*Dropdown content*/}
                    {openMission && (
                        <Card className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg z-20 w-full">
                            <CardContent className="px-4 ">
                                <Compass className="inline-block h-6 w-6 text-emerald-600 m mb-2 "/>
                                <h2 className="text-black font-bold">Our Mission</h2>
                                <p className="font-inter text-gray-500">
                                    To empower underprivileged communities by providing access to quality education, healthcare, and sustainable livelihood opportunities, 
                                    fostering self-reliance and dignity for all.
                                </p>

                            </CardContent>
                        </Card>
                    )}
                  <div className="relative mt-4 h-0.5 overflow-hidden bg-emerald-600/50">
            <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                style={{
                animation: "shine 5s linear infinite",
                }}
            />
            </div>

            </div>
                {/*vision section*/}
            <div className="cursor-pointer relative"
                onClick={() => setOpenVision(!openVision)}>
                    <h1 className="flex items-center text-4xl font-bold font-merriweather text-gray-600 mt-8">
                        OUR VISION
                        <Plus className={`inline-block ml-2 h-8 w-8 text-emerald-600 transition-transform ${openVision? 'rotate-45' : ""} `}/>
                    </h1>
                    {/*Dropdown content*/}
                    {openVision && (
                        <Card className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg z-20 w-full">
                            <CardContent className="px-4 ">
                                <EyeIcon className="inline-block h-6 w-6 text-emerald-600 m mb-2 "/>
                                <h2 className="text-black font-bold">Our Vision</h2>
                                <p className="font-inter text-gray-500">
                                    A world where every community has the resources and support needed to thrive, where poverty is eradicated,
                                     and where every individual can reach their full potential.
                                </p>

                            </CardContent>
                        </Card>
                    )}
                  <div className="relative mt-4 h-0.5 overflow-hidden bg-emerald-600/50">
            <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                style={{
                animation: "shine 5s linear infinite",
                }}
            />
            </div>
            </div>
            {/*values section*/}
            <div className="cursor-pointer relative"
                onClick={() => setOpenValues(!openValues)}>
                    <h1 className="flex items-center text-4xl font-bold font-merriweather text-gray-600 mt-8">
                        OUR VALUES
                        <Plus className={`inline-block ml-2 h-8 w-8 text-emerald-600 transition-transform ${openValues ? 'rotate-45' : ""} `}/>
                    </h1>
                    {/*Dropdown content*/}
                    {openValues && (
                        <Card className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg z-20 w-full">
                            <CardContent className="px-4 ">
                                <EyeIcon className="inline-block h-6 w-6 text-emerald-600 m mb-2 "/>
                                <h2 className="text-black font-bold">Our Values</h2>
                                <p className="font-inter text-gray-500">
                                    Compassion, integrity, community-driven solutions, sustainability, and accountability 
                                    guide every action we take in service of those we support.
                                </p>

                            </CardContent>
                        </Card>
                    )}
                  <div className="relative mt-4 h-0.5 overflow-hidden bg-emerald-600/50">
            <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                style={{
                animation: "shine 5s linear infinite",
                }}
            />
            </div>
            </div>
                

            </div>

        </div>
    )
}