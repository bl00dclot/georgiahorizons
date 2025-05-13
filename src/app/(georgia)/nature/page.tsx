import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card/card"
export default function Page() {

    return (
                <div>
                      <header className="mb-8 text-center">
    <h1>Explore Georgia&apos;s Natural Wonders</h1>
    <p>From soaring Caucasus peaks to lush Black Sea coastlines, Georgia’s landscapes offer unparalleled diversity. Discover ancient forests, hidden caves, vibrant wetlands, and more in this guide to the country’s most breathtaking natural destinations.</p>
  </header>
<div className="grid grid-cols-1 gap-4 my-4">
  <Card>
  <CardHeader>
    <CardTitle>    <h2>Mountains and Highland Regions</h2></CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Georgia is 85% mountainous, dominated by the Greater and Lesser Caucasus ranges. The Greater Caucasus along the Russian border features peaks like Mt. Shkhara (5,068 m) and Mt. Kazbek (5,047 m). Highland regions such as Kazbegi (with the Gergeti Trinity Church backdrop), remote Tusheti, and UNESCO-listed Upper Svaneti combine rugged trails, glaciers, and medieval tower villages—perfect for hikers and climbers.</p>
  </CardContent>
</Card>
<Card>
  <CardHeader>
    <CardTitle>    <h2>National Parks and Protected Areas</h2>
</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>About 11% of Georgia is under protection, from alpine tundra to coastal marshes. Borjomi-Kharagauli National Park boasts virgin beech-fir forests and wildlife like brown bears and lynx. Lagodekhi preserves old-growth mixed forests and waterfalls. Vashlovani’s semi-desert home to steppe flora and rare birds. Mtirala’s temperate rainforest sees over one million migrating raptors each autumn. Coastal Kolkheti protects peat bogs and lagoons for wintering waterbirds, while Javakheti’s highland lakes support cranes and pelicans.</p>
  </CardContent>
</Card>
<Card>
  <CardHeader>
    <CardTitle>    <h2>Flora and Fauna</h2>
</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>With over 4,130 vascular plants (900 endemic), Georgia spans Colchic rainforests, beech-pine woodlands, alpine meadows, and eastern steppes. Wildlife includes brown bears, Eurasian lynx, chamois, and the elusive Caucasian leopard. Birdlife ranges from golden eagles to migrating swans and flamingos in wetlands. Coastal waters host dolphins and ancient sturgeon.</p>
  </CardContent>
</Card>
<Card>
  <CardHeader>
    <CardTitle>    <h2>Lakes, Rivers, and Waterfalls</h2>
</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Georgia’s largest lake, Paravani (38 km²), sits on a volcanic plateau. Rivers like the Kura, Rioni, and Alazani carve fertile valleys and gorges. Martvili Canyon offers emerald pools and boat rides under cliffs. Okatse Canyon features twin waterfalls plunging 95 m over limestone, with cliffside walkways. Roadside gorges and cascades provide scenic swimming spots in summer and icy spectacles in winter.</p>
  </CardContent>
</Card>
<Card>
  <CardHeader>
    <CardTitle>    <h2>Caves and Karst Formations</h2>
</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Explore Prometheus Cave’s illuminated chambers and underground river. Sataplia Nature Reserve features dinosaur footprints and karst tunnels with a panoramic cliff-top walkway. Lesser-known caves in Adjara and near Tbilisi offer spelunking adventures amid stalactites and springs.</p>
  </CardContent>
</Card>
<Card>
  <CardHeader>
    <CardTitle>    <h2>Coastal Regions and the Black Sea</h2>
</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Georgia’s 220 km Black Sea coast enjoys a subtropical climate. Batumi’s botanical gardens showcase palms, magnolias, and orchids. Coastal wetlands and dunes shelter rare plants and waterbirds. Warm waters attract swimmers, fishermen, and dolphin watchers. Behind the shore, rainforest-clad mountains of Mtirala and Machakhela rise steeply, blending beach and jungle in one extraordinary region.</p>
  </CardContent>
</Card>
</div>
            </div>
    )
}