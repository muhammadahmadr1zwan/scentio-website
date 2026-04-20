/**
 * Single site-wide credit; lives in root layout so it is not duplicated per page.
 */
export default function LocallyXBubble() {
  return (
    <a
      href="https://locally-x.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-[60] bg-foreground text-background text-xs font-medium px-3 py-2 rounded-full hover:bg-accent transition-colors shadow-lg"
    >
      Built by LocallyX
    </a>
  );
}
