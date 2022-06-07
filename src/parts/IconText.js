import React from "react";

import Button from "elements/Button";

export default function IconText() {
  return (
    <Button type="link" className="brand-text-icon" href="">
      Me<span className="text-secondary">Stay.</span>
    </Button>
  );
}
