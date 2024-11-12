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

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8 flex flex-col gap-4">
                        <div className="flex justify-between">
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
                        <div className="">
                            <WeeklyOrdersChart width="500px" />
                        </div>
                    </div>
                    <div className="col-span-4 flex flex-col gap-4">
                        <WavyAreaChart />
                        <InteractivePieChart />
                    </div>
                </div>

              
                {/* Bottom */}
                <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min border">
                    <OrdersTable/>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard