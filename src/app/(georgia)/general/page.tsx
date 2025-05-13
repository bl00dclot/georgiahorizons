import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/app/ui/card/card"
import Link from "next/link"
export default function Page() {

    return (
                <div>
  <h1 className="text-center">General Information About Georgia</h1>
  <div className="grid grid-cols-1 gap-4 my-4">

  <div className="grid grid-cols-2 gap-4 my-4">
    <Card>
  <CardHeader>
    <CardTitle>    <h2>Location &amp; Overview</h2>
</CardTitle>
  </CardHeader>
  <CardContent>
    <p>
      Georgia is a country at the crossroads of Eastern Europe and Western Asia, nestled between the Black Sea, Russia, Turkey, Armenia, and Azerbaijan. Covering about 69,700 km², it is famed for its dramatic Caucasus mountains and lush lowlands. The capital, <strong>Tbilisi</strong>, is home to over a third of its roughly 3.7 million people. Renowned as one of the world’s oldest wine regions, Georgia’s modern culture reflects millennia of history and hospitality.
    </p>  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>
          <h2>Essential Facts</h2>
    </CardTitle>
    <CardDescription>
    <ul>
      <li><strong>Population:</strong> ~3.7 million</li>
      <li><strong>Capital:</strong> Tbilisi (თბილისი)</li>
      <li><strong>Language:</strong> Georgian (ქართული), plus Russian and widely understood English in urban areas</li>
      <li><strong>Currency:</strong> Georgian Lari (GEL)</li>
      <li><strong>Time Zone:</strong> UTC+4 (no daylight saving)</li>
      <li><strong>Visa/Entry:</strong> Visa-free for many countries (often up to 1 year) – check official sources</li>
      <li><strong>Emergency:</strong> Dial 112 for police, fire, or medical</li>
    </ul>
    </CardDescription>
  </CardHeader>
  
</Card>
  </div>

 <Card>
  <CardHeader>
    <CardTitle>
    <h2>Geography &amp; Climate</h2>
    </CardTitle>
    <CardDescription>
          <p>
      From the humid Black Sea coast in the west to the continental interiors of Tbilisi and Kakheti, and up to alpine heights in the Caucasus, Georgia’s climate zones vary dramatically:
    </p>
      </CardDescription>
</CardHeader>
<CardContent>
    <ul>
      <li><strong>Western Georgia (Black Sea):</strong> Subtropical, wet winters and warm summers.</li>
      <li><strong>Eastern Georgia (Tbilisi/Kakheti):</strong> Hot, dry summers and cooler winters.</li>
      <li><strong>Mountain Regions:</strong> Alpine conditions; heavy snow in winter, cool summers.</li>
    </ul>

          <p>
      <em>Best time to visit:</em> April–June and September–October for mild weather, blossoming spring, or autumn foliage.
    </p>
</CardContent>
    <CardFooter>
    <Link href="/nature">Learn more</Link>
    </CardFooter>
 </Card>

  <Card>
  <CardHeader>
    <CardTitle>    <h2>Culture &amp; Etiquette</h2></CardTitle>
  </CardHeader>
  <CardContent>
<p>
      Georgians are world-famous for hospitality—“Every guest is a gift from God.” Greetings often include a handshake and direct eye contact; acquaintances may exchange a light kiss on the cheek. Use simple phrases: <em>gamarjoba</em> (გამარჯობა) for “hello” and <em>madloba</em> (მადლობა) for “thank you.” Dress modestly when entering homes or churches, and remove your shoes in private dwellings.
      Dining customs revolve around the <strong>supra</strong>, a grand feast led by a toastmaster (tamada). Wait for the tamada’s toast before drinking, hold your glass with both hands, and maintain eye contact. It’s polite to accept at least a small taste of any food or drink offered. Tipping around 10% is customary in restaurants.
  </p></CardContent>
  <CardFooter>
    <Link href="/culture">Learn more</Link>
    </CardFooter>
</Card>

  <Card>
  <CardHeader>
    <CardTitle>    <h2>Safety &amp; Practical Tips</h2></CardTitle>
  </CardHeader>
  <CardContent>
    <ul>
      <li>Georgia is generally safe; watch for petty theft in crowded areas.</li>
      <li>Avoid travel to Abkhazia and South Ossetia (conflict zones).</li>
      <li>Health care is best in major cities; travel insurance is recommended.</li>
      <li>Tap water is usually safe in cities; bottled water is widely available.</li>
      <li>ATMs and credit cards (Visa/Mastercard) are common in urban centers.</li>
    </ul>
  </CardContent>
</Card>
  <Card>
  <CardHeader>
    <CardTitle>    <h2>Transportation &amp; Connectivity</h2></CardTitle>
  </CardHeader>
  <CardContent>
<p>      In cities, use licensed taxis or ride-hail apps (e.g., Bolt). Tbilisi’s metro and bus network are affordable (~1 GEL). For intercity travel, marshrutkas (minibuses) and trains connect major towns. Renting a car offers flexibility but be cautious on mountain roads.
        <strong>Internet &amp; SIM:</strong> Free Wi-Fi is widespread; for full coverage buy a local SIM (Magti, Silknet/Geocell) at airports or kiosks. Tourist SIM packages include data and minutes.
  </p>
  </CardContent>
</Card>
<Card>
  <CardHeader>
    <CardTitle>    <h2>Best Times &amp; Ideal Travelers</h2></CardTitle>
  </CardHeader>
  <CardContent>
      Georgia appeals to a range of visitors:
          <ul>
      <li><strong>Adventure seekers:</strong> Hiking, mountaineering, skiing in the Caucasus.</li>
      <li><strong>Wine &amp; food lovers:</strong> Traditional feasts and 8,000-year-old qvevri wines in Kakheti.</li>
      <li><strong>History buffs:</strong> UNESCO sites like Mtskheta, Gelati Monastery, and Svaneti tower villages.</li>
      <li><strong>Beachgoers:</strong> Black Sea resorts near Batumi in summer.</li>
    </ul>
  </CardContent>

</Card>

  </div>
    </div>
    )
}