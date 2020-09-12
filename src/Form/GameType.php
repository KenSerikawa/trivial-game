<?php

namespace App\Form;

use App\Entity\Game;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;

class GameType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('type', ChoiceType::class, [
                'choices' => [
                    'Any type' => 'any',
                    'Multiple' => 'multiple',
                    'true / false' => 'boolean',
                ]
            ])

            
            ->add('category', ChoiceType::class, [
                'choices' => [
                    'Any type' => 'any',
                    'General Knowledge' => '9',
                    'Entertainment: Books' => '10',
                    'Entertainment: Film' => '11',
                    'Entertainment: Music' => '12',
                    'Entertainment: Musicals &amp; Theatres' => '13',
                    'Entertainment: Television' => '14',
                    'Entertainment: Video Games' => '15',
                    'Entertainment: Board Games' => '16',
                    'Science &amp; Nature' => '17',
                    'Science: Computers' => '18',
                    'Science: Mathematics' => '19',
                    'Mythology' => '20',
                    'Sports' => '21',
                    'Geography' => '22',
                    'History' => '23',
                    'Politics' => '24',
                    'Art' => '25',
                    'Celebrities' => '26',
                    'Animals' => '27',
                    'Vehicles' => '28',
                    'Entertainment: Comics' => '29',
                    'Science: Gadgets' => '30',
                    'Entertainment: Japanese Anime &amp; Manga' => '31',
                    'Entertainment: Cartoon &amp; Animations' => '32',
                ]
            ])
            ->add('difficulty', ChoiceType::class, [
                'choices' => [
                    'Any type' => 'any',
                    'Easy' => 'easy',
                    'Medium' => 'medium',
                    'Hard' => 'hard',
                ]
            ])
            ->add('question_number', NumberType::class, [
                'attr' => [
                    'max' => '50', 
                    'min' => '1'
                ]
            ])
            ->add('ready', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-primary'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Game::class,
        ]);
    }
}
