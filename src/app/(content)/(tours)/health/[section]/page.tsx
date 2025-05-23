import { WellnessData } from "../interface";
import healthData from "@/app/lib/data/tours/health.json";
import {Breadcrumb, BreadcrumbLink, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/app/ui/breadcrumb/breadcrumb";
import Link from "next/link";
import Image from "next/image";

function slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, '-')
}

export default async function Page({params
}: {
    params: Promise<{ section: string }>
}) {
    const section = await params
    const health: WellnessData[] = healthData.filter(
        (item): item is WellnessData => typeof item.description === "string"
    );
    const healthSection = health.find((item) => slugify(item.section) === section.section.toLowerCase());
    if (!healthSection) {
        return <div>Section not found</div>;
    }
    return (
        <div>
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href="/health">Health & Relax</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
        <BreadcrumbPage>
        {healthSection.section}
        </BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

<div className="flex justify-center">
<div className="flex justify-center w-5/6 static">
<div className="w-full">
<h1 className="m-4">{healthSection.section}</h1>
<Image src={healthSection.imageSrc} alt={healthSection.imageAlt} width={0} height={0} sizes="100vw" className="w-full h-auto rounded-lg my-4 self-center" />
<p>{healthSection.description}</p>
{healthSection.options.map((option) => (
    <div key={option.subtext} className="mt-4  flex flex-col">
        <h3 className="text-lg font-medium">{option.subtext}</h3>
        <p>{option.description}</p>
        <Link
        href={`/health/${slugify(healthSection.section)}/${slugify(option.subtext)}`}
        className="text-darkGreen font-medium hover:underline active:underline self-baseline mt-2"
                    >
                        Locations
                    </Link>
        </div>
            ))}

</div>
</div>
</div>
        </div>
    )
}