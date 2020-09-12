<?php 

declare(strict_types=1);

namespace App\Service;

final class GameSetter 
{
    private $questions;
    private $category;
    private $difficulty;
    private $type;

    public function __construct(string $questions='10', string $category='', string $difficulty='', string $type='')
    {
        $this->questions = $questions;
        $this->category = $category;
        $this->difficulty = $difficulty;
        $this->type = $type;
    }

    public function __invoke()
    {
        $url = 'https://opentdb.com/api.php?amount=' . $this->questions;

        return json_decode(file_get_contents($url), true);
    }
}
