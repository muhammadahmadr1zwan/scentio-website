/**
 * Single site-wide credit; lives in root layout so it is not duplicated per page.
 */
export default function LocallyXBubble() {
  return (
    <a
      href="https://locally-x.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-[60] rounded-full bg-foreground px-3 py-2 text-xs font-medium text-background shadow-lg transition-[transform,background-color,box-shadow] duration-200 ease-out hover:scale-[1.03] hover:bg-accent hover:shadow-xl active:scale-100"
    >
      Built by LocallyX
    </a>
  );
}
