<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Service\GameSetter;

class GameController extends AbstractController
{
    public function index(Request $request, GameSetter $setter)
    {
        $result = $setter->__invoke();
        return $this->render('game/index.html.twig', [
            'results' => $result['results']
        ]);
    }
}
