/* eslint-disable react/prop-types */
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    //   ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "Monday", orders: 186 },
    { month: "Tuesday", orders: 105 },
    { month: "Wednesday", orders: 237 },
    { month: "Thursday", orders: 73 },
    { month: "Friday", orders: 209 },
    { month: "Saturday", orders: 214 },
]

const chartConfig = {
    orders: {
        label: "Orders",
        color: "hsl(var(--chart-1))",
    },
}

export function WeeklyOrdersChart({ height = "auto", width = "700px" }) {
    return (
        <Card className={`min-w-[${width}] border border-black pb-2`} style={{ height }}>
            <CardHeader>
                <CardTitle>Weekly Orders</CardTitle>
                <CardDescription>4th Nov - 10th Nov</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="orders" fill="var(--color-orders)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
                </div>
            </CardFooter>
        </Card>
    )
}
