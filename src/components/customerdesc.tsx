import { SiTypescript, SiMysql} from "react-icons/si";
import { DiCss3Full } from "react-icons/di";

export default function CustomerDesc() {
    return (
        <section className="py-[150px]">
            <div className="w-[94%] max-w-[600px] mx-auto flex flex-col gap-[70px]">
                <div>
                    <h1 className="font-[300] text-[30px] mb-[40px]">The task itself</h1>
                    <p className="font-[200] text-[18px]">Technology is changing. From archives to floppy discs. Floppy discs to cloud. At Spaak, we focus on the frontier of technology, working to push the boundaries of what is possible in knowledge tools.
                        <br></br><br></br>
                        Technology is changing. From archives to floppy discs. Floppy discs to cloud. At Spaak, we focus on the frontier of technology, working to push the boundaries of what is possible in knowledge tools.
                        Technology is changing. From archives to floppy discs. Floppy discs to cloud. At Spaak, we focus on the frontier of technology, working to push the boundaries of what is possible in knowledge tools.
                        <br></br><br></br>
                        Technology is changing. From archives to floppy discs. Floppy discs to cloud. At Spaak, we focus on the frontier of technology, working to push the boundaries of what is possible in knowledge tools.Technology is changing. From archives to floppy discs. Floppy discs to cloud. At Spaak, we focus on the frontier of technology, working to push the boundaries of what is possible in knowledge tools.
                        <br></br><br></br>
                    </p>
                </div>
                <div>
                    <h1 className="font-[300] text-[30px] mb-[40px]">Tech stack</h1>
                    <p className="font-[200] text-[18px] mb-[40px]">Technology is changing. From archives to floppy discs. Floppy discs to cloud. At Spaak, we focus on the frontier of technology, working to push the bound.
                    </p>
                    <div className="flex items-center gap-[30px]">
                        <SiTypescript size={30} />
                        <SiMysql size={60} />
                        <DiCss3Full size={40} />
                    </div>

                </div>
                
            </div>
        </section>
    )
}