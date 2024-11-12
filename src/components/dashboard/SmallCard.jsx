/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { DollarSign } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Progress } from '../ui/progress'
import { IndianRupeeIcon } from 'lucide-react'


const SmallCard = ({
  icon: IconComponent,
  label,
  amount,
  progress,
  isMoneyRelated = true
}) => {
  return (
    <>
      <Card className="border border-black min-w-[250px]">
        <CardHeader className="pb-2">
          <CardDescription className="text-black">
            <div className="flex gap-1 items-center">
              {IconComponent && <IconComponent size={18} />}
              {label}
            </div>
          </CardDescription>
          <CardTitle className="text-4xl">
          <div className="flex gap-1 items-center">
              {isMoneyRelated && <IndianRupeeIcon size={32} />}
            {amount}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground text-xs">+{progress}% from last week</div>
        </CardContent>
        <CardFooter>
          <Progress value={progress} aria-label="25% increase" />
        </CardFooter>
      </Card>
    </>
  )
}

export default SmallCard