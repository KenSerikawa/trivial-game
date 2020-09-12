<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Service\GameSetter;
use App\Entity\Game;
use App\Form\GameType;

class GameController extends AbstractController
{
    public function new(Request $request)
    {
        $form = $this->createForm(GameType::class);

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
