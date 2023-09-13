#!/usr/bin/env node
import chalkAnimation from "chalk-animation";
import figlet from "figlet";


const RAINBOW_HAPPY_TEXT = "Happy  programmer's  day",
rainbowText = chalkAnimation.rainbow(
    figlet.textSync(RAINBOW_HAPPY_TEXT)
);
rainbowText.start();
