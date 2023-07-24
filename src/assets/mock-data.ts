import breastImg from '../assets/svgs/bodyAreas/breast.png'
import armsImg from '../assets/svgs/bodyAreas/arms.png'
import bellyImg from '../assets/svgs/bodyAreas/belly.png'
import buttocksImg from '../assets/svgs/bodyAreas/buttocks.png'
import legsImg from '../assets/svgs/bodyAreas/legs.png'

import diastasisNormalImg from '../assets/svgs/diastasis/diastasis-normal.png'
import diastasisOpenImg from '../assets/svgs/diastasis/diastasis-open.png'

import cartwheelingImg from '../assets/svgs/workouts/cartwheeling.png'
import runningImg from '../assets/svgs/workouts/running.png'
import heavyLiftingImg from '../assets/svgs/workouts/heavy-lifting.png'
import swimmingImg from '../assets/svgs/workouts/swimming.png'
import meditateImg from '../assets/svgs/workouts/meditate.png'

import didYouKnowImg from '../assets/didYouKnow.png'

import lactoseImg from '../assets/svgs/food/lactose.png'
import eggImg from '../assets/svgs/food/egg.png'
import nutsImg from '../assets/svgs/food/nutts.png'
import soyImg from '../assets/svgs/food/seedling.png'
import glutenImg from '../assets/svgs/food/croissant.png'
import fishImg from '../assets/svgs/food/fish.png'
import crabImg from '../assets/svgs/food/crab.png'

export const MOCK_DATA = {
  data: {
    name: 'test-day',
    slug: 'test-day',
    questions: [
      {
        type: 'single',
        options: [
          { label: 'Losing Weight', value: 'losing_weight' },
          {
            label: 'Improve specific body areas',
            value: 'improve_specific_body_areas'
          },
          { label: 'Gain Muscle', value: 'gain_muscle' },
          { label: 'Develop Healthy Habits', value: 'develop_healthy_habits' }
        ],
        label: 'What is your primary goal?',
        key: 'primary_goal'
      },
      {
        type: 'multiple',
        options: [
          {
            label: 'Breast form',
            value: 'breast_form',
            imgSrc: breastImg
          },
          {
            label: 'Arms',
            value: 'arms',
            imgSrc: armsImg
          },
          {
            label: 'Belly',
            value: 'belly',
            imgSrc: bellyImg
          },
          {
            label: 'Buttocks',
            value: 'buttocks',
            imgSrc: buttocksImg
          },
          {
            label: 'Legs and Thighs',
            value: 'legs_and_thighs',
            imgSrc: legsImg
          }
        ],
        label: 'Select body areas you would like to improve:',
        description: 'Select all that apply.',
        key: 'body_areas'
      },
      {
        type: 'single',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' }
        ],
        label: 'Do you suffer from back pain?',
        key: 'back_pain'
      },
      {
        type: 'multiple',
        options: [
          { label: 'Anxiety or depression', value: 'anxiety_or_depression' },
          { label: 'Face skin problems', value: 'face_skin_problems' },
          { label: 'Weak hair or hair loss', value: 'weak_hair_or_hair_loss' },
          { label: 'Weak nails', value: 'weak_nails' },
          {
            label: 'Loose skin or strech marks',
            value: 'loose_skin_or_strech_marks'
          },
          {
            label: 'None of the above',
            value: 'none',
            custom: { deselectAll: true }
          }
        ],
        label: 'Concerns you have faced after pregnancy:',
        description: 'Select all that apply.',
        key: 'concerns'
      },
      {
        type: 'single',
        options: [
          { label: 'I would love to!', value: 'i_would_love_to' },
          { label: 'I would like to try', value: 'i_would_like_to_try' },
          { label: 'I am better on my own', value: 'i_am_better_on_my_own' }
        ],
        label: 'How do you feel about excercising with your baby?',
        key: 'excercising'
      },
      {
        type: 'single',
        options: [
          {
            label: 'Yes',
            value: 'yes',
            imgSrc: diastasisOpenImg
          },
          {
            label: 'No',
            value: 'no',
            imgSrc: diastasisNormalImg
          },
          { label: 'Not sure', value: 'not_sure' }
        ],
        label: 'Do you suffer from DIASTASIS RECTI ?',
        description:
          'Diastasis recti is the partial or complete separation of the rectus abdominis, or muscles, which meet at the midline of your stomach.',
        key: 'diastasis_recti'
      },
      {
        type: 'multiple',
        options: [
          {
            label: 'Flexibility',
            value: 'flexibility',
            imgSrc: cartwheelingImg
          },
          {
            label: 'Aerobic',
            value: 'aerobic',
            imgSrc: runningImg
          },
          {
            label: 'Strength',
            value: 'strength',
            imgSrc: heavyLiftingImg
          },
          {
            label: 'Others',
            value: 'others',
            imgSrc: swimmingImg
          },
          {
            label: 'I don\u2019t like workouts',
            value: 'none',
            imgSrc: meditateImg,
            custom: { deselectAll: true }
          }
        ],
        label: 'Select type of workouts you like:',
        description: 'Select all that apply.',
        key: 'workouts'
      },
      {
        type: 'single',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no'  }
        ],
        label: 'Are you currently breasfeeding?',
        key: 'breastfeeding'
      },
      {
        type: 'info',
        label: 'Did you know?',
        description:
          'Low impact exercises are completely safe during breastfeeding and do not affect the milk supply or taste.',
        description1:"Keep in mind that it only takes 15 minutes of focused daily physical activity to give long-lasting results.",
        caption:"Let’s continue with creating your personalized meal plan portfolio!",
        imgSrc: didYouKnowImg,
        options: [
          {
            label: 'OK, lets do it!',
            value: 'yes'
          },
        ],
        key: 'info_block'
      },
      {
        type: 'multiple',
        options: [
          {
            label: 'Lactose',
            value: 'lactose',
            imgSrc: lactoseImg
          },
          {
            label: 'Eggs',
            value: 'eggs',
            imgSrc: eggImg

          },
          {
            label: 'Nuts',
            value: 'nuts',
            imgSrc: nutsImg

          },
          {
            label: 'Soy',
            value: 'soy',
            imgSrc: soyImg
          },
          {
            label: 'Gluten',
            value: 'gluten',
            imgSrc: glutenImg
          },
          {
            label: 'Fish',
            value: 'fish',
            imgSrc: fishImg
          },
          {
            label: 'Shellfish',
            value: 'shellfish',
            imgSrc: crabImg
          },
          {
            label: 'None of the Above',
            value: 'none',
            custom: { deselectAll: true }
          }
        ],
        label: 'What kind of allergies do you have?',
        description: 'Select all that apply.',
        key: 'allergies'
      },
      {
        type: 'input',
        label: 'How young are you?',
        key: 'age'
      },
    ]
  }
};
