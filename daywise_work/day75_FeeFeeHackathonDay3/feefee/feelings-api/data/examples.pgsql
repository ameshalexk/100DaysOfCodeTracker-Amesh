INSERT INTO examples(
	 emotion_id, body)
	VALUES ( 1, 'Fear feels like your stomach is freaking out! AAAAA!!'),
     ( 1, 'Fear feels like your body is full of ants! Oh no!!!'),
     ( 2, 'Anger feels like losing your cool'),
     ( 2, 'Anger feels like you’re on fire! FWOOSH'),
     ( 3, 'Happy feels like blowing out your birthday candles!'),
     ( 3, 'Happy feels like getting tucked into bed!'),
     ( 4, 'Sad feels like when your heart hurts.'),
     ( 4, 'Sad feels like a stone in the stomach.'),
     ( 5, 'Yuck feels like you are sick or need to throw up. But you are not sick! '),
     ( 5, 'Yuck feels like you would never ever ever eat that. I mean, ew!!!!'),
     ( 6, 'Surprise feels like... WHOA!!!!'),
     ( 6, 'Surprise feels like when it starts to rain on a sunny day.');

     SELECT * FROM examples;

     SELECT * FROM emotions JOIN examples ON examples.emotion_id = emotions.emotion_id JOIN char_examples ON char_examples.emotion_id = emotions.emotion_id JOIN bullets ON bullets.emotion_id = emotions.emotion_id;

          SELECT * FROM emotions JOIN examples ON examples.emotion_id = emotions.emotion_id JOIN char_examples ON char_examples.emotion_id = emotions.emotion_id JOIN bullets ON bullets.emotion_id = emotions.emotion_id WHERE emotions.emotion_id = 2;

////yes
          SELECT * FROM emotions JOIN examples ON examples.emotion_id = emotions.emotion_id JOIN bullets ON bullets.emotion_id = examples.emotion_id JOIN char_examples ON char_examples.emotion_id = bullets.emotion_id;

//yes
                SELECT * FROM emotions JOIN examples ON examples.emotion_id = emotions.emotion_id JOIN bullets ON bullets.emotion_id = examples.emotion_id JOIN char_examples ON char_examples.emotion_id = bullets.emotion_id WHERE emotions.emotion_id = 2;