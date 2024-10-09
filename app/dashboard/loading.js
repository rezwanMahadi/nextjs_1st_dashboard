import { ubuntu } from '@/app/ui/fonts';
// import { useState, CSSProperties } from "react";
import RingLoader from "react-spinners/RingLoader";
import DashboardSkeleton from '@/app/ui/skeletons'

function Loading() {
    return (
        <div className="h-full flex justify-center items-center">
            <span className={`${ubuntu.className} text-[50px]`}>Loading...</span>
            <RingLoader/>
        </div>
        // <DashboardSkeleton />
    );
}

export default Loading;
