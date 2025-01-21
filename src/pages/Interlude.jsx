import { useEffect } from 'react';

function Interlude() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>Interlude</div>
  )
}

export default Interlude