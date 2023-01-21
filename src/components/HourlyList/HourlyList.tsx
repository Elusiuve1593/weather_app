import {FC, memo} from "react";
import {useAppSelector} from "../../bll/store";
import {HourlyInfoItem} from "./HourlyInfoItem/HourlyInfoItem";

export const HourlyList: FC = memo(() => {
    const onceCall = useAppSelector(state => state.citySlice.oneCall)
    return (
        <>
            {
                onceCall.hourly.slice(0, 12).map((item) => {
                    const icon = item.weather.map(el => el.icon)
                    return (
                        <HourlyInfoItem key={item.dt}
                                        dt={item.dt}
                                        icon={icon}
                                        temp={item.temp}
                        />
                    )
                })
            }
        </>
    )
})