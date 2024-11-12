/* eslint-disable no-unused-vars */
import { InteractivePieChart } from "@/components/dashboard/InteractivePieChart"
import OrdersTable from "@/components/dashboard/OrdersTable"
import SmallCard from "@/components/dashboard/SmallCard"
import { WavyAreaChart } from "@/components/dashboard/WavyAreaChart"
import { WeeklyOrdersChart } from "@/components/dashboard/WeeklyOrdersChart"
import {
    DollarSign,
    LucidePercent,
    ShoppingCart
} from "lucide-react"
import React from "react"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
    return (
        <>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-red-400">
                    <div className="col-span-2 bg-muted/50 rounded-xl flex justify-between">
                        {/* Left */}
                        <SmallCard
                            icon={DollarSign}
                            label={"Balance"}
                            amount={56784}
                            progress={25} />

                        <SmallCard
                            icon={LucidePercent}
                            label={"Sales"}
                            amount={24575}
                            progress={15} />

                        <SmallCard
                            icon={ShoppingCart}
                            label={"Orders"}
                            amount={0o7}
                            progress={50}
                            isMoneyRelated={false} />
                    </div>
                    <div className="bg-muted/50 rounded-xl">
                        {/* Right */}
                        <div className="">
                            <WavyAreaChart />

                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2 items-center justify-center">
                        <WeeklyOrdersChart width="500px" />
                    </div>
                    <div className="col-span-1">
                        {/* <WeeklyOrdersChart height="auto" width="" /> */}
                        <InteractivePieChart />
                    </div>
                    {/* <WeeklyOrdersChart /> */}
                </div>
                {/* Bottom */}
                <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min border">
                    <OrdersTable />
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard