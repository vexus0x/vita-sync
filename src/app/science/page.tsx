"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, FlaskConical, FileText, Clock, ChevronDown } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const articles = [
  {
    title: "Understanding mTOR and Longevity",
    description: "How this protein complex influences aging and what interventions can modulate it.",
    type: "Explainer",
    readTime: "8 min",
    level: "Intermediate",
    keyPoints: [
      "mTOR senses nutrients and growth factors",
      "Chronic mTOR activation promotes aging",
      "Fasting and rapamycin can inhibit mTOR",
      "Balance is key for muscle maintenance",
    ],
    fullContent: `
## What is mTOR?

mTOR (mechanistic Target of Rapamycin) is a protein complex that acts as a central regulator of cell growth, metabolism, and aging. It integrates signals from nutrients, growth factors, and cellular energy to control whether cells should grow or repair.

## How mTOR Affects Aging

When mTOR is chronically activated (constant eating, high protein, growth factors), it signals the body to prioritize growth over maintenance. This leads to:
- Increased cancer risk
- Reduced autophagy
- Accelerated cellular aging
- Metabolic dysfunction

## Interventions to Modulate mTOR

### 1. Fasting
The most accessible way to inhibit mTOR. Even 12-16 hours of fasting can reduce mTOR activity.

### 2. Rapamycin
A drug that specifically inhibits mTOR. Studies in mice show lifespan extension, but human use is still experimental.

### 3. Exercise
Especially resistance training, can temporarily activate mTOR (good for muscle building) followed by periods of inhibition during recovery.

### 4. Caffeine
Moderate consumption (2-3 cups coffee) may help modulate mTOR activity.

### 5. Certain Compounds
- Resveratrol
- Curcumin
- EGCG (green tea)
- Spermidine

## Practical Takeaways

You don't need to completely inhibit mTOR. The goal is balance:
- Time-restricted eating (12-16 hour fast)
- Adequate protein but not excessive
- Regular exercise including resistance training
- Consider mTOR-modulating compounds in moderation
    `,
  },
  {
    title: "The Science of Autophagy",
    description: "How your cells clean up damage and trigger this powerful longevity pathway.",
    type: "Explainer",
    readTime: "10 min",
    level: "Intermediate",
    keyPoints: [
      "Autophagy means 'self-eating'",
      "Triggers: fasting, exercise, certain compounds",
      "Peak effect at 12-24 hours of fasting",
      "Declines with age - crucial to maintain",
    ],
    fullContent: `
## What is Autophagy?

Autophagy (Greek for "self-eating") is a cellular recycling process where cells break down and remove damaged components. Think of it as cellular housekeeping.

## Why Autophagy Matters

As we age, autophagy naturally declines. This leads to accumulation of cellular damage, which contributes to:
- Chronic inflammation
- Metabolic dysfunction
- Cellular senescence
- Age-related diseases

## How to Activate Autophagy

### Fasting
- **12 hours:** Mild autophagy begins
- **16 hours:** Significant activation
- **24 hours:** Maximum autophagy induction
- **48+ hours:** Prolonged autophagy (not recommended for beginners)

### Exercise
Both aerobic and resistance training stimulate autophagy, especially when performed in a fasted state.

### Heat Exposure
Sauna use has been shown to activate autophagy pathways.

### Cold Exposure
Cold therapy may enhance cellular cleanup processes.

### Autophagy-Enhancing Compounds
- Resveratrol
- EGCG (green tea catechins)
- Spermidine
- Curcumin
- Nicotinamide riboside (NR)

## Practical Protocol

For most people, a 16-hour fast 2-3 times per week is an achievable way to maintain autophagy. Combine with exercise and you have a powerful longevity stack.
    `,
  },
  {
    title: "Blue Zones: Lessons from Centenarians",
    description: "What we can learn from the world's longest-lived populations.",
    type: "Research Review",
    readTime: "12 min",
    level: "Beginner",
    keyPoints: [
      "5 Blue Zones identified worldwide",
      "Common: plant-based diet, movement, purpose",
      "Social connections are crucial",
      "Moderate alcohol, stress management",
    ],
    fullContent: `
## What Are Blue Zones?

Blue Zones are geographic regions where people live significantly longer than average. Researcher Dan Buettner identified five primary Blue Zones:

1. **Sardinia, Italy** - Island with highest concentration of male centenarians
2. **Okinawa, Japan** - Traditional diet and strong social bonds
3. **Loma Linda, California** - Seventh-day Adventist community
4. **Nicoya Peninsula, Costa Rica** - Strong purpose (plan de vida)
5. **Ikaria, Greece** - Mediterranean lifestyle and herbal teas

## Common Characteristics (Power 9)

### 1. Natural Movement
Daily physical activity built into work and travel, not exercise routines.

### 2. Plant-Based Diet
95% of food comes from plants, with meat consumed sparingly (about 5 times per month).

### 3. Moderate Alcohol
Wine consumed in small amounts, usually with meals.

### 4. Purpose
Strong sense of purpose (Ikigai in Okinawa, Plan de Vida in Nicoya)

### 5. Stress Management
Daily rituals to downshift stress, often involving community.

### 6. Social Networks
Strong family ties and close friends who support healthy behaviors.

### 7. Belonging
Community belonging, often religious institutions.

### 8. Moderation
"Hara hachi bu" - eating until 80% full.

### 9. Environment
Built environments that encourage walking and social interaction.

## Lessons We Can Apply

1. Eat mostly plants, limit meat
2. Move naturally throughout the day
3. Build strong social connections
4. Find purpose and meaning
5. Practice stress reduction daily
6. Drink wine in moderation with food
7. Stop eating when 80% full
8. Build community around healthy habits
    `,
  },
  {
    title: "NMN and NR: NAD+ Precursors Explained",
    description: "The science behind popular longevity supplements and their efficacy.",
    type: "Deep Dive",
    readTime: "15 min",
    level: "Advanced",
    keyPoints: [
      "NAD+ declines with age by ~50% by age 50",
      "NR more stable than NMN orally",
      "Human studies show increased NAD+ levels",
      "Long-term benefits still being studied",
    ],
    fullContent: `
## What is NAD+?

NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme essential for:
- Energy production (ATP)
- DNA repair (via sirtuins)
- Cellular signaling
- Mitochondrial function

## NAD+ Decline with Age

NAD+ levels decline by approximately 50% between ages 40 and 60. This decline is associated with:
- Reduced energy production
- Impaired DNA repair
- Mitochondrial dysfunction
- Increased inflammation

## NAD+ Precursors

### NR (Nicotinamide Riboside)
- More stable orally
- Converted to NAD+ via the salvage pathway
- Well-absorbed in humans
- Studies show increased NAD+ levels at 500-1000mg/day

### NMN (Nicotinamide Mononucleotide)
- One step closer to NAD+ in the biosynthesis pathway
- Some studies suggest NMN may be more effective in certain tissues
- Requires transporters to enter cells

## Human Studies

### NR Research
- Multiple studies show NAD+ increases of 40-100% at 500-1000mg/day
- Improved markers of cardiovascular health in some studies
- Cognitive benefits observed in older adults

### NMN Research
- Human trials show improved insulin sensitivity in postmenopausal women
- Studies ongoing for cardiovascular and cognitive effects

## Practical Recommendations

### Dosage
- NR: 250-500mg 1-2x daily
- NMN: 250-500mg 1-2x daily

### Timing
Morning with food for best absorption and NAD+ support throughout the day.

### Stacking
NR and NMN are often stacked with other longevity compounds:
- Resveratrol
- Fisetin
- Quercetin

## Caveats

Long-term human studies are still ongoing. While NAD+ increases are consistently demonstrated, clinical endpoints (lifespan extension) remain to be proven in humans.
    `,
  },
  {
    title: "Zone 2 Training: The Sweet Spot for Longevity",
    description: "Why moderate-intensity cardio may be the most effective exercise for healthspan.",
    type: "Research Review",
    readTime: "7 min",
    level: "Beginner",
    keyPoints: [
      "Zone 2: 60-70% of max heart rate",
      "Builds mitochondrial density",
      "90+ minutes per week for benefits",
      "Complements high-intensity training",
    ],
    fullContent: `
## What is Zone 2?

Zone 2 training refers to exercise at approximately 60-70% of your maximum heart rate. It's the intensity where you can maintain a conversation (the "talk test") but you're breathing harder than normal.

## Why Zone 2 Matters for Longevity

### Mitochondrial Density
Zone 2 is the most effective intensity for building mitochondrial density. More mitochondria = better energy production and metabolic health.

### Fat Adaptation
Your body becomes more efficient at burning fat for fuel, improving metabolic flexibility.

### Cardiovascular Health
Regular Zone 2 exercise strengthens your heart without excessive stress hormones.

### Sustainability
Zone 2 is low-impact and can be maintained long-term, unlike high-intensity training.

## Finding Your Zone 2

### The Talk Test
You should be able to speak in complete sentences, but not sing.

### Heart Rate Formula
- Max HR = 220 - your age
- Zone 2 = 60-70% of Max HR
- Example (40 years old): 108-126 bpm

### Rate of Perceived Exertion (RPE)
- 3-4 on a scale of 1-10
- "Comfortably hard" but sustainable

## Sample Zone 2 Workouts

| Workout | Duration | Activity | Intensity |
|---------|----------|----------|-----------|
| Morning Walk | 30-45 min | Brisk walking | 60-65% max HR |
| Easy Cycle | 45-90 min | Stationary or outdoor | 60-70% max HR |
| Swim | 30-45 min | Steady pace | 60-70% max HR |
| Hike | 60-120 min | With elevation gain | 60-70% max HR |

## Weekly Recommendations

For optimal longevity benefits:
- **Minimum:** 90 minutes per week
- **Optimal:** 150-180 minutes per week
- **Frequency:** 3-5 sessions

## The 80/20 Rule

Elite endurance athletes typically follow an 80/20 split:
- 80% of training at Zone 2
- 20% at higher intensities

This approach maximizes adaptations while preventing overtraining.

## Combining with Other Training

Zone 2 complements rather than replaces other exercise:
- Resistance training 2-4x/week
- High-intensity intervals 1-2x/week (optional)
- Flexibility and mobility work
    `,
  },
  {
    title: "Epigenetic Clocks and Biological Age",
    description: "Understanding how we measure aging and what interventions work.",
    type: "Explainer",
    readTime: "12 min",
    level: "Advanced",
    keyPoints: [
      "DNA methylation patterns reveal biological age",
      "Several clocks: Horvath, GrimAge, PhenoAge",
      "Some interventions reverse epigenetic age",
      "Tests available but expensive",
    ],
    fullContent: `
## What Are Epigenetic Clocks?

Epigenetic clocks measure biological age through DNA methylation patterns. Unlike chronological age (your birthday), biological age reflects the actual condition of your cells and tissues.

## How They Work

As we age, certain patterns of DNA methylation (chemical marks on DNA) change in predictable ways. These patterns can be measured and compared to reference populations to estimate biological age.

## Major Epigenetic Clocks

### Horvath Clock (2013)
- First epigenetic clock developed
- Measures methylation at 353 sites
- Correlates well with chronological age

### GrimAge (2018)
- Better predictor of mortality and morbidity
- Based on DNA methylation plus plasma biomarkers
- More accurate for healthspan prediction

### PhenoAge (2018)
- Based on phenotypic age
- Combines clinical markers with methylation
- Good for tracking intervention effects

## What Interventions Reverse Epigenetic Age?

### Strong Evidence
- Caloric restriction
- Weight loss (in obese individuals)
- Smoking cessation
- Hormone replacement therapy

### Moderate Evidence
- Exercise
- Mediterranean diet
- Sleep optimization

### Emerging Evidence
- NAD+ precursors (NR, NMN)
- Rapamycin (in mice)
- Senolytics

## Testing Options

### Clinical Tests
- **TruDiagnostic** - Comprehensive epigenetic testing
- **Delfi** - Blood-based epigenetic cancer detection
- **Horvath Clock tests** - Available through various labs

### Consumer Tests
- **EpiAge Test Kits** - At-home finger prick tests
- **GlycanAge** - Glycan-based biological age

## Limitations

- Expensive ($200-500+)
- Variability between tests
- Not yet covered by insurance
- Correlation vs causation still being studied

## Practical Takeaway

Epigenetic age testing can be useful for tracking interventions over time, but the gold standard remains focusing on established longevity practices: exercise, nutrition, sleep, stress management, and social connection.
    `,
  },
]

const categories = ["All", "Explainer", "Research Review", "Deep Dive"]

export default function SciencePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white">Science</h1>
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Deep dives into the science of longevity. We break down complex research into
            actionable insights you can apply to your life.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-emerald-500 hover:bg-emerald-600" : "border-zinc-700 text-zinc-400 hover:text-white"}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        {article.type === "Explainer" && <BookOpen className="h-5 w-5 text-emerald-400" />}
                        {article.type === "Research Review" && <FlaskConical className="h-5 w-5 text-cyan-400" />}
                        {article.type === "Deep Dive" && <FileText className="h-5 w-5 text-purple-400" />}
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                          {article.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-zinc-500">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white mt-4 group-hover:text-emerald-400 transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-zinc-400">{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Key Takeaways</p>
                      <ul className="space-y-1">
                        {article.keyPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                            <span className="text-emerald-400 mt-1">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">
                        {article.level}
                      </Badge>
                      <Button variant="ghost" className="text-emerald-400 hover:text-emerald-300">
                        Read Full Article <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="bg-zinc-900 border-zinc-800 max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-emerald-500/10">
                      {article.type === "Explainer" && <BookOpen className="h-8 w-8 text-emerald-400" />}
                      {article.type === "Research Review" && <FlaskConical className="h-8 w-8 text-cyan-400" />}
                      {article.type === "Deep Dive" && <FileText className="h-8 w-8 text-purple-400" />}
                    </div>
                    <div>
                      <DialogTitle className="text-2xl text-white">{article.title}</DialogTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                          {article.type}
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime}
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                          {article.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="prose prose-invert max-w-none space-y-6">
                  <div dangerouslySetInnerHTML={{ 
                    __html: article.fullContent
                      .replace(/## (\w+.*)/g, '<h2 class="text-2xl font-semibold text-white mt-8 mb-4">$1</h2>')
                      .replace(/### (\w+.*)/g, '<h3 class="text-xl font-semibold text-white mt-6 mb-3">$1</h3>')
                      .replace(/- (\w+.*)/g, '<li class="ml-4 mb-2">$1</li>')
                      .replace(/\n\n/g, '</p><p class="mb-4 text-zinc-300">')
                      .replace(/^(<p)/, '<p class="mb-4 text-zinc-300"')
                  }} />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  )
}
