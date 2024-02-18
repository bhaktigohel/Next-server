import React from "react";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div className="pt-20 w-[80%] m-4">
      <p>
        It’s been a while since you’ve been to your dentist for a check-up. Usually you’re good
        about taking care of your teeth. Lately with your kid’s busy schedules in school and sports,
        and your own demanding job, you’ve kind of slacked off about your own oral hygiene.
      </p>
      <p>
        With recent news about health issues being related to oral hygiene, you’ve grown concerned
        that you’ve increased your own health risks by not taking care of your teeth.
      </p>
      <h1 className="text-xl pt-8 underline-offset-auto	underline ">What is a crossbite?</h1>
      <p>
        A crossbite is basically a misalignment of a tooth or teeth where one or more teeth are
        positioned irregularly; they’re closer to the cheek or tongue, rather than their ideal
        position.
      </p>
      <h1 className="text-xl pt-8 underline-offset-auto	underline">
        What You Need to Know About Dental Crowns?
      </h1>
      <p>
        A dental crown is a ‘custom shaped tooth-like’ cap that’s used to hide large spaces that
        can’t be adjusted with simple fillings; it can also be applied if you have oddly shaped,
        badly stained, discolored or damaged/broken teeth.
      </p>
      <h1 className="text-xl pt-8 underline-offset-auto	underline">What is Oral Cancer?</h1>
      <p className="pb-4">
        Cells in the body can grow, multiply and die. A cancer cell is a cell that doesn’t do what
        it’s supposed to do; it becomes abnormal. Oral cancer is when some cells in the mouth become
        abnormal, and begin to grow and spread. These abnormal cells attack other healthy cells
        causing damage to the surrounding tissues.
      </p>
    </div>
  );
}

export default HomePage;
