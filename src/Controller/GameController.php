<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Service\GameSetter;
use App\Form\GameType;

class GameController extends AbstractController
{
    public function new(Request $request)
    {
        $form = $this->createForm(GameType::class);
        $form->handleRequest($request);

        if($form->isSubmitted()) {
            $game = $form->getData();
            $setter = new GameSetter($game->getQuestionNumber(), $game->getCategory(), $game->getDifficulty(), $game->getType());
            $result = $setter->__invoke();

            return $this->render('game/index.html.twig', [
                'results' => $result['results']
            ]);
        }

        return $this->render('game/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    public function index(Request $request, GameSetter $setter)
    {
        $result = $setter->__invoke();
        return $this->render('game/index.html.twig', [
            'results' => $result['results']
        ]);
    }
}
