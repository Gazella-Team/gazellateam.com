import { Heart } from "lucide-react";

export default function TrustBar() {
    return (
        <section className="py-10">
            <div className="w-[90%] mx-auto max-w-[1300px] gap-10 lg:gap-0 grid grid-cols-1 md:grid-cols-2 lg:flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex">
                        <div className=" bg-main text-white p-2 rounded-full">
                            <Heart size={18} />
                        </div>
                    </div>
                    <h3 className="font-[300]">Personlig kommunikation</h3>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex">
                        <div className=" bg-main text-white p-2 rounded-full">
                            <Heart size={18} />
                        </div>
                    </div>
                    <h3 className="font-[300]">Detalje og grundighed</h3>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex">
                        <div className=" bg-main text-white p-2 rounded-full">
                            <Heart size={18} />
                        </div>
                    </div>
                    <h3 className="font-[300]">Hurtig levering</h3>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex">
                        <div className=" bg-main text-white p-2 rounded-full">
                            <Heart size={18} />
                        </div>
                    </div>
                    <h3 className="font-[300]">+10 års samlet erfaring</h3>
                </div>
            </div>
        </section>
    )
}