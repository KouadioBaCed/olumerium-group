import Container from "@/components/ui/Container";
import StatCounter from "@/components/ui/StatCounter";
import { KEY_STATS } from "@/data/company";

export default function KeyStats() {
  return (
    <section className="relative -mt-1 bg-navy py-16">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-white/10 pt-12 sm:grid-cols-3 lg:grid-cols-7 lg:gap-x-6">
          {KEY_STATS.map((stat) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              light
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
