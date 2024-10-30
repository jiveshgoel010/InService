/* eslint-disable no-unused-vars */
import SmallCard from "@/components/dashboard/SmallCard"
import {
    DollarSign,
    LucidePercent
} from "lucide-react"
import React from "react"

const Dashboard = () => {
    return (
        <>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-2 bg-muted/50 rounded-xl flex gap-4">
                        {/* Left */}
                        <SmallCard
                            icon={DollarSign}
                            label={"Balance"}
                            amount={56784} />

                        <SmallCard
                            icon={LucidePercent}
                            label={"Sales"}
                            amount={24575} />
                    </div>
                    <div className="bg-muted/50 p-4 rounded-xl">
                        {/* Right */}
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                </div>

                {/* Bottom */}
                {/* <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min border border-black p-4">
                    hi
                </div> */}
            </div>
        </>
    )
}

export default Dashboard